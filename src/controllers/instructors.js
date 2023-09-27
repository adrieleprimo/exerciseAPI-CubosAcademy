let { instructors,  IdentifierInstructor } = require('../databases/databases');


const allInstructors = (req, res) => {
    return res.status(200).json(instructors);
}



const instructorId = (req, res) => {
    const { id } = req.params;
    const validationId = instructors.find((elemento) => {
        return elemento.id === Number(id);
    });
    if (!validationId) {
        return res.status(404).json({ message: "Id Not Found" })
    }
    return res.status(200).json(validationId);
}

const newInstructor = (req, res)=>{
    const {id} = req.params;
    const {name, email} = req.body;
    const validationId = instructors.find((instructor) => {
        return instructor.id === Number(id);
    });
    if (validationId) {
        return res.status(404).json({ message: "This Id exist" })
    }
    const newInstructor = {
        id: IdentifierInstructor++,
        name,
        email
    }
    instructors.push(newInstructor);
    return res.status(200).json(newInstructor);

}

module.exports = {allInstructors, instructorId, newInstructor};