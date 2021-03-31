const resolvers = {
    Query:{
        people:async(_,__,{dataSources})=>dataSources.peoplesApi.retrievePeople(),
        person:async(_,args,{dataSources})=>dataSources.peoplesApi.retrievePerson(args),
        page:async(_,args,{dataSources})=>dataSources.peoplesApi.paginatedResponse(args),
        films:async(_,args,{dataSources})=>dataSources.peoplesApi.films(args)
    }
}

module.exports = resolvers;