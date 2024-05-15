export class Tag{
    static readonly ANGULAR = new Tag('Angular,'red');
    static readonly C++ = new Tag('C++,'blue');

    private constructor(private readonly key:string, public readonly color:string){

    }
    this.toString(){
        return this.key;
    }
}