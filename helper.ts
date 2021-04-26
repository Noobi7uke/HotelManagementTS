function find<Type>(arr: Type[], fn: (val:Type, index: number)=>Boolean ): Type|undefined{
    for(var i=0;i<arr.length;i++)
        if(fn(arr[i], i))
            return arr[i];

    // return arr.find(fn);
}



export { find };