
export async function updateAndReturn<T> (model:any, data:any): Promise<T> {
    const dataUpdated =  await model.update(data, {
        where: {
            id: data.id
        },
        returning: ['id']
    });
    
    const dataFinded = await model.findOne({
        where: {
            id: dataUpdated[1]
        }
    })

    return dataFinded
}