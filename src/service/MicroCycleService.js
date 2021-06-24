import Service from "./Service";

class MicroCycleService extends Service {
    constructor(model) {
        super(model);
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
                    path: 'trainingDays',
                    model: 'TrainingDay',
                    populate: {
                        path: "trainingSessions.workouts",
                        model: "Workout",
                        populate: {
                            path: "functionalArea",
                            model: "FunctionalArea"
                        }
                    }
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
}

export default MicroCycleService;