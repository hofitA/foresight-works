export const getCovidData = () => {    
    return fetch(
        "https://covid-193.p.rapidapi.com/history?day=2020-06-02&country=usa",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key":
              "d48d540977msh3fa07820543a991p154cb1jsn3f9c7a3051fb",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => data)
        .catch((err) => {
          console.log(err);
        });
};
