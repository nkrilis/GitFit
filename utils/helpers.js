module.exports = {
    get_BMR: (data) => {

        if(data.gender === "Male")
        {
            return Math.floor(10 * data.weight + 6.25 * data.height - 5 * data.age + 5);
            
        }
        if(data.gender === "Female")
        {
            return Math.floor(10 * data.weight + 6.25 * data.height - 5 * data.age - 161);
        }

    },

    getDeficit: (bmr, data) => 
    {
        const bmrD = bmr *0.25;
        return Math.floor(bmr - bmrD);
    },

    getSurplus: (bmr, data) => 
    {
        const bmrD = bmr *0.25;
        return Math.floor(bmr + bmrD);
    }

  };
  