module.exports = async(policyContext, config, { strapi }) => {
   // console.log(policyContext.state.user)
    const requestId = policyContext.state.user.id;
    if (policyContext.request.params.id) {
    const offerId = policyContext.request.params.id;
   // console.log(offerId)
   const offer = await strapi.entityService.findOne("api::offer.offer",offerId,
    {populate:["owner"]}
);
   console.log(offer);
   if(requestId === offer.owner.id)
   {return true }
   else {return false } 
}
else { console.log(policyContext.request.bod);
    const ownerId=JSON.parse(policyContext.request.body.data).owner;
    console.log(ownerId);
    if (requestId!==ownerId){return false}
    else {return true}
}
}