class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name.substr(0,1).toUpperCase() + data.name.substring(1);
        this.sprite = data.sprites.front_default;
        this.type1 = data.types[0].type.name.substr(0,1).toUpperCase() + data.types[0].type.name.substring(1);
        if(data.types[1] != null) {
            this.type2 = this.type1;
            this.type1 = data.types[1].type.name.substr(0,1).toUpperCase() + data.types[1].type.name.substring(1);
        } else this.type2 = "None";


    }
}

export default Pokemon;