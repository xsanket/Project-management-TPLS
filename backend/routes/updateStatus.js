import express from 'express';
import ProjectModel from "../models/createProjectModel.js";

const router = express.Router();


router.put("/updateStatus", async (req, res) => {
    const { status, id } = req.body;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    //searching logic same as previous
    const searchData = req.query.filter ?
        {
            $or: [
                { ProjectName: { $regex: req.query.filter, $options: "i" } },
                { Reason: { $regex: req.query.filter, $options: "i" } },
                { Type: { $regex: req.query.filter, $options: "i" } },
                { Division: { $regex: req.query.filter, $options: "i" } },
                { Category: { $regex: req.query.filter, $options: "i" } },
                { Priority: { $regex: req.query.filter, $options: "i" } },
                { Department: { $regex: req.query.filter, $options: "i" } },
                { Location: { $regex: req.query.filter, $options: "i" } },
                { Status: { $regex: req.query.filter, $options: "i" } },

            ],
        }
        :
        {};


    // same sorting logic 
    let sort = req.query.sort || "ProjectName";
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};

    if (sort[1]) {
        sortBy[sort[0]] = sort[1];
    }
    else {
        sortBy[sort[0]] = "asc"
    }

    try {
        await ProjectModel.findByIdAndUpdate(
            id, { status, },
            { new: true }
        );

        const updateStatus = await ProjectModel.find({})
            .find(searchData)
            .sort(sortBy)
            .skip((page - 1) * limit)
            .limit(limit)

        if (!updateStatus) {
            res.status(404).send({ message: "Project Not Found" });
        }
        else {
            res.status(200).send({ message: "Status Updated", updateStatus });
        }




    } catch (error) {
        res.status(500).send({ message: error.message });
    }


});

export default router;