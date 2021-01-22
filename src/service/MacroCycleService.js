import Service from './Service';
import moment from 'moment';

class MacroCycleService extends Service {
  constructor(model, microCycleModel) {
    super(model);
    this.microCycleModel = microCycleModel;
    this.getWithMicroCycles = this.getWithMicroCycles.bind(this);
  }

  async getAll(query) {
    let { skip, limit } = query;

    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;

    delete query.skip;
    delete query.limit;

    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id);
      } catch (error) {
        console.log("not able to generate mongoose id with content", query._id);
      }
    }

    try {
      let items = await this.model
        .find(query)
        .populate({
          path: 'microcycles',
          model: 'MicroCycle'
        })
        .skip(skip)
        .limit(limit);
      let total = await this.model.countDocuments();

      return {
        error: false,
        statusCode: 200,
        data: items,
        total
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      };
    }
  }

  async insert(data) {
    try {
      let microCycles = await this.initMicroCycles(data);
      data['microcycles'] = microCycles;
      let item = await this.model.create(data);
      if (item)
        return {
          error: false,
          item
        };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create item",
        errors: error.errors
      };
    }
  }

  async initMicroCycles(data) {
    let microcycles = [];
    let weekCount = moment(data.endDate).diff(moment(data.initDate), 'weeks');
    let flagDate = moment(data.initDate);
    for (let i = 0; i < weekCount; i++) {
      const initDate = flagDate.format();
      const endDate = flagDate.add(7 - flagDate.day(), 'd');
      microcycles.push({
        initDate: initDate,
        endDate: endDate.format()
      });
      flagDate = endDate.add(1, 'd');
    }
    return this.microCycleModel.create(microcycles);
  }

  async getWithMicroCycles(id) {
    try {
      let macroCycle = await this.model.findById(id)
        .populate({
          path: 'microcycles',
          model: 'MicroCycle'
        });

      if (!macroCycle)
        return {
          error: true,
          statusCode: 404,
          message: "item not found"
        };

      return {
        error: false,
        statusCode: 200,
        data: macroCycle
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      };
    }
  }
};

export default MacroCycleService;