// Import Product Model
import Origin from "../models/flight.js";
 
// Get all deperature
export const getOrigin = async (req, res) => {
    try {
        const origin = await Origin.findAll();
        res.send(origin);
    } catch (err) {
        console.log(err);
    }
}
 
// Get departure by id
export const getOriginById = async (req, res) => {
    try {
        const origin = await Origin.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(origin[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new product
export const createOrigin = async (req, res) => {
    try {
        await Origin.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 