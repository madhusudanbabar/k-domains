export default(ctx, inject) => {
    var op = <%= JSON.stringify(options, null, 2) %>
    console.log(op);
    inject("domains", op);
    ctx.$domains = op;
}