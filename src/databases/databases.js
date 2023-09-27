const databases = {
    IdentifierClass:2,
    instructors: [
        {
            id: 1,
            name: 'John Dexter',
            email: 'johndexter@email.com',
            status: true
        },
        {
            id: 2,
            name: 'Reynands Lourez',
            email: 'reynandslourez@email.com',
            status: true
        }
    ],
    classes: [
        {
            id: 1,
            instructor_id: 1,
            title: 'First server',
            description: 'Building the first server'
        }
    ]
}

module.exports = databases;