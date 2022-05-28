import axios from 'axios';
const reqconfig = {
    headers: {
      Authorization:
        "Bearer {KvfzUlBtAQR6UFA3RmAsqcPrFAye9BTf9EdZ6efQIHJlcgsmZCsNkAxt0iU0FirFZmb4BUUM1XiEp5TVQU_higqO-6-2ndTNzNyKD8V-SocM_3evpKmM0E6vdCiMYnYx}",
    },
    params: {
      term: "restaurants",
      location: 1234 street street,
      radius: 1500,
      sort_by: "relevance",
      limit: 10,
    },
  };

axios
  .get("https://api.yelp.com/v3/businesses/search", reqconfig)
  .then((response) => {
    console.log(response); 
});

//console.log(response.data.businesses[0].name); 
//^first restaurant in the business list
