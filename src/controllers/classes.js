let {instructors, classes, IdentifierClass } = require('../databases/databases');

const allClasses = (req, res)=>{
    return res.status(200).json(classes);
}

const classId = (req, res)=>{
    const {id} = req.params;
    const validationId = classes.find((elemento)=>{
        return elemento.id === Number(id);
    });
    if(!validationId){
        return res.status(404).json({message:"Id Not Found"})
    }
    return res.status(200).json(validationId);
}

const allInstructors = (req, res)=>{
    return res.status(200).json(instructors);
}

const instructorId = (req, res)=>{
    const {id} = req.params;
    const validationId = instructors.find((elemento)=>{
        return elemento.id === Number(id);
    });
    if(!validationId){
        return res.status(404).json({message:"Id Not Found"})
    }
    return res.status(200).json(validationId);
}

const newClass = (req, res)=>{
    const {id} = req.params;
    const { title, description} = req.body;

    const validationId = instructors.find((instructor)=>{
        return instructor.id === Number(id);
    });
    if(!validationId){
        return res.status(404).json({message:"Id Not Found"})
    }

    const instructor = {
        id: IdentifierClass++,
        instructor_id:Number(id),
        title,
        description
    }
    classes.push(instructor);
    return res.status(200).json(instructor);

}

module.exports = {allClasses, classId, allInstructors, instructorId, newClass}