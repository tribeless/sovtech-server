const resolvers = {
    // PeopleData: {
    //       __resolveType(people, context, info) {
    //           if (people.next) {
    //               return 'People';
    //           }
    //           return null;
    //       },
    // },
    // MassDataType: {
    //       __resolveType(obj, context, info) {
    //           if (obj.mass) {
    //               return 'IntMass';
    //           }
    //           return "FloatMass";
    //       },
    // },
    Query:{
        people:async(_,__,{dataSources})=>dataSources.peoplesApi.retrievePeople(),
        person:async(_,args,{dataSources})=>dataSources.peoplesApi.retrievePerson(args),
        page:async(_,args,{dataSources})=>dataSources.peoplesApi.paginatedResponse(args)
    }
}

module.exports = resolvers;