/* eslint-disable */
import products from './db/mockData.json' assert{ type:'json'};

const  getAll= (ctx:any)=>{
    ctx.response.body=products
}

const getOne = (ctx:any)=>{
    const product = products.find((product)=>product.id == ctx.params.id);
    if(product){
        console.log(product)
        ctx.response.status=200;
        ctx.response.body=product
    }else{
        ctx.response.status=404;
        ctx.response.body={status:'Product not found'}
    }
}
const addOne = async (ctx:any)=>{
    products.push({id:products.length+1,...(await ctx.request.body().value)});
    ctx.response.status = 201;
    ctx.response.body = products;
}
const updateOne = async(ctx:any)=>{
    try {
        const idx = products.findIndex((product)=>product.id == ctx.params.id);
       
        if(idx<0){
            ctx.response.status=404;
            ctx.response.body={status:'Product not found'}
        }else{
            const {product,stock,thumbnail} = await ctx.request.body().value
            products[idx]= {
                id:products[idx].id,
               product :  product || products[idx].product,
                stock : stock || products[idx].stock,
                thumbnail : thumbnail || products[idx].thumbnail,
            }
            ctx.response.body=products[idx]
        }
        
    } catch (err) {
        console.log(err)
    }
    
}
const deleteOne = (ctx:any)=>{
    const idx = products.findIndex((product)=>product.id == ctx.params.id);
    if(idx<0){
        ctx.response.status=404;
        ctx.response.body={status:'Product not found'}
    }else{
        products.splice(idx,1);
        ctx.response.status=203;
        ctx.response.body={status:"Product deleted"}     


    }
}

export default {
    getAll,
    getOne,
    updateOne,
    addOne,
    deleteOne
}