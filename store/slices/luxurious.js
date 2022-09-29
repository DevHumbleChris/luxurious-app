import { createSlice } from "@reduxjs/toolkit";

const Apartments = [
  {
    id: 'b0dcf0a3-f19b-4566-a3b1-1c5aa4cafe3a',
    name: "Guitart Rosa",
    phoneNumber: "0726167090",
    location: "Nyali, Mombasa",
    description:
      "2 Bedroom fully Furnished Apartment with swimming pool, Automatic generator back up, 24 hours guards, Ample parking space, fitted air conditioners, wifi Internet, Perimeter wall with electrical fence",
    starRating: 4.6,
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "KSh 110,000",
    amenities: [
      {
        iconName: 'bed',
        iconType: 'material-community',
        title: '2 Bedrooms'
    },
    {
      iconName: 'bath',
      iconType: 'font-awesome-5',
      title: '2 Bathrooms'
  },
  {
    iconName: 'toilet',
    iconType: 'font-awesome-5',
    title: '2 Toilets'
},
{
  iconName: 'car',
  iconType: 'font-awesome-5',
  title: '1 Parking Space'
}],
    duration: "per month",
    type: 'Apartments'
  },
  {
    id: 'aed6e7e3-be74-4fe2-b26f-5a8170b86e5c',
    name: "Demidoff Milano",
    phoneNumber: "0703846197",
    location: "Nyali, Mombasa",
    description: `Executively furnished 4 bedroom apartment WITH SEA VIEW in Nyali offered for rent 4 bedrooms all en-suite + 1 room SQ with separate entrance + study room + big laundry area. Apartment is approximately 4,000 square feet in area with an open plan design, glass sliding doors and balustrades, providing a lot of light and cross ventilation with a lot of privacy. The apartments are built on 2 acres of Land near sandy beach of Indian Ocean.`,
    starRating: 4.5,
    image:
      "https://images.kenyapropertycentre.com/properties/images/thumbs/17869/06304da6884803-4br-furnished-execuitive-seaview-apartment-in-nyali-for-rent-nyali-mombasa.jpg",
    price: "KSh 230,000",
    amenities: [
      {
        iconName: 'bed',
        iconType: 'material-community',
        title: '4 Bedrooms'
      },
      {
        iconName: 'bath',
      iconType: 'font-awesome-5',
        title: '4 Bathrooms'
      },
      {
        iconName: 'toilet',
    iconType: 'font-awesome-5',
        title: '4 Toilets'
      },
      {
        iconName: 'swimming-pool',
        iconType: 'font-awesome-5',
        title: 'Swimming Pool'
      },
      {
        iconName: 'chef-hat',
        iconType: 'material-community',
        title: 'Kitchen Utility'
      },
      {
        iconName: 'wifi',
        iconType: 'font-awesome-5',
        title: 'WiFi'
      },
      {
        iconName: 'shield-home',
        iconType: 'material-community',
        title: '24/7 Security'
      },
      {
        iconName: 'car',
        iconType: 'font-awesome-5',
        title: '2 Parking Space'
      }
    ],
    duration: "per month",
    type: 'Apartments'
  },
  {
    id: '58a68cfd-ffbf-406a-9c3c-b9bee4f76d46',
    name: "La Molina Aparthotels",
    phoneNumber: "0703846197",
    location: "Nyali, Mombasa",
    description:
      "Ideally situated on the beachfront, directly overlooking the Historical Fort Jesus and the sprawling old town and port with Close proximity to Mombasa town and Nyali. The apartments are few meters away away from English Point Marina.",
    starRating: 4.8,
    image:
      "https://images.kenyapropertycentre.com/properties/images/thumbs/18185/063131b05b4ccd-3-br-beach-apartment-in-nyali-ar134-for-rent-nyali-mombasa.jpeg",
    price: "KSh 130,000",
    amenities: [
      {
        iconName: 'bed',
        iconType: 'material-community',
        title: '3 Bedrooms'
      },
      {
        iconName: 'bath',
      iconType: 'font-awesome-5',
        title: '3 Bathrooms'
      },
      {
        iconName: 'toilet',
    iconType: 'font-awesome-5',
        title: '3 Toilets'
      },
      {
        iconName: 'car',
        iconType: 'font-awesome-5',
        title: '1 Parking Space'
      },
      {
        iconName: 'dumbbell',
        iconType: 'font-awesome-5',
        title: 'Gym'
      },
      {
        iconName: 'swimming-pool',
        iconType: 'font-awesome-5',
        title: 'Swimming Pool'
      }
    ],
    duration: "per month",
    type: 'Apartments'
  },
  {
    id: '872fdcf0-e75c-41a4-a9c6-ecca8fb72473',
    name: "Bernina Apartments",
    phoneNumber: "+254722517926",
    location: "Westlands, Nairobi",
    description:
      "Spacious 1 & 2 bedroom apartment with a beautiful living room cum dining room and the living room opens into a balcony and a very beautiful fully fitted kitchen, measuring approximately 800 sq. ft. and 1500 sq. ft. respectively, this property is located on Lower Kabete Lane.",
    starRating: 4.8,
    image:
      "https://images.kenyapropertycentre.com/properties/images/thumbs/18505/0632824d85c06b-elsie-ridge-for-rent-westlands-nairobi.jpeg",
    price: "KSh 245,000",
    amenities: [
      {
        iconName: 'bed',
        iconType: 'material-community',
        title: '3 Bedrooms'
      },
      {
        iconName: 'bath',
      iconType: 'font-awesome-5',
        title: '3 Bathrooms'
      },
      {
        iconName: 'toilet',
    iconType: 'font-awesome-5',
        title: '3 Toilets'
      },
      {
        iconName: 'car',
        iconType: 'font-awesome-5',
        title: '1 Parking Space'
      },
      {
        iconName: 'dumbbell',
        iconType: 'font-awesome-5',
        title: 'Gym'
      },
      {
        iconName: 'swimming-pool',
        iconType: 'font-awesome-5',
        title: 'Swimming Pool'
      }
    ],
    duration: "per month",
    type: 'Apartments'
  },
  {
    id: '0358eba6-75d0-48d4-8fb6-c24b38510af2',
    name: "Milano Apartments",
    phoneNumber: "+254722517926",
    location: "Kilimani, Nairobi",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    starRating: 5.0,
    image:
      "https://images.unsplash.com/photo-1551361415-69c87624334f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "KSh 200,000",
    amenities: [
      {
        iconName: 'bed',
        iconType: 'material-community',
        title: '1 Bedrooms'
      },
      {
        iconName: 'bath',
      iconType: 'font-awesome-5',
      title: '1 Bathrooms'
      },
      {
        iconName: 'toilet',
    iconType: 'font-awesome-5',
        title: '1 Toilets'
      },
      {
        iconName: 'car',
        iconType: 'font-awesome-5',
        title: '1 Parking Space'
      },
      {
        iconName: 'dumbbell',
        iconType: 'font-awesome-5',
        title: 'Gym'
      },
      {
        iconName: 'swimming-pool',
        iconType: 'font-awesome-5',
        title: 'Swimming Pool'
      },
      {
        iconName: 'cctv',
        iconType: 'material-community',
        title: 'CCTV Camera'
      },
      {
        iconName: 'wifi',
        iconType: 'font-awesome-5',
        title: 'WiFi'
      }
    ],
    duration: "per month",
    type: 'Apartments'
  },
  {
    id: 'c85a1574-af17-4b17-a397-12503e6f51f4',
    name: "Roca Apartments",
    phoneNumber: "+254722517926",
    location: "Parklands, Nairobi",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    starRating: 4.4,
    image:
      "https://images.unsplash.com/photo-1605283176476-63150675f4a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: "KSh 140,000",
    amenities: [
      {
        iconName: 'bed',
        iconType: 'material-community',
        title: '1 Bedrooms'
      },
      {
        iconName: 'bath',
      iconType: 'font-awesome-5',
        title: '1 Bathrooms'
      },
      {
        iconName: 'toilet',
    iconType: 'font-awesome-5',
        title: '1 Toilets'
      },
      {
        iconName: 'car',
        iconType: 'font-awesome-5',
        title: '1 Parking Space'
      },
      {
        iconName: 'dumbbell',
        iconType: 'font-awesome-5',
        title: 'Gym'
      },
      {
        iconName: 'swimming-pool',
        iconType: 'font-awesome-5',
        title: 'Swimming Pool'
      },
      {
        iconName: 'cctv',
        iconType: 'material-community',
        title: 'CCTV Camera'
      },
      {
        iconName: 'wifi',
        iconType: 'font-awesome-5',
        title: 'WiFi'
      }
    ],
    duration: "per month",
    type: 'Apartments'
  },
  {
    id: 'afe0d1be-080c-47e3-a952-bb18bda9e1e0',
    name: "City Apartments",
    phoneNumber: "+254722517926",
    location: "Lavington, Nairobi",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    starRating: 4.9,
    image:
      "https://images.unsplash.com/photo-1638973140785-3b918e290682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: "KSh 250,000",
    amenities: [
      {
        iconName: 'bed',
        iconType: 'material-community',
        title: '1 Bedrooms'
      },
      {
        iconName: 'toilet',
    iconType: 'font-awesome-5',
        title: '1 Toilets'
      },
      {
        iconName: 'bath',
      iconType: 'font-awesome-5',
        title: '1 Bathrooms'
      },
      {
        iconName: 'car',
        iconType: 'font-awesome-5',
        title: '1 Parking Space'
      },
      {
        iconName: 'dumbbell',
        iconType: 'font-awesome-5',
        title: 'Gym'
      },
      {
        iconName: 'swimming-pool',
        iconType: 'font-awesome-5',
        title: 'Swimming Pool'
      },
      {
        iconName: 'cctv',
        iconType: 'material-community',
        title: 'CCTV Camera'
      },
      {
        iconName: 'wifi',
        iconType: 'font-awesome-5',
        title: 'WiFi'
      }
    ],
    duration: "per month",
    type: 'Apartments'
  },
];

const Homes = [
  {
    name: "Guitart Rosa",
    phoneNumber: "0726167090",
    location: "Nyali, Mombasa",
    description:
      "2 Bedroom fully Furnished Apartment with swimming pool, Automatic generator back up, 24 hours guards, Ample parking space, fitted air conditioners, wifi Internet, Perimeter wall with electrical fence",
    starRating: 4.6,
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "KSh 110,000",
    amenities: ["2 Bedrooms", "2 Bathrooms", "2 Toilets", "1 Parking Space"],
    duration: "per month",
  },
];

export const luxuriousSlice = createSlice({
  name: "luxuriousSlice",
  initialState: {
    apartments: Apartments,
    favorites: []
  },
  reducers: {
    setFavorites: (state, action) => {
      const favorites = state.favorites
      if (favorites.length <= 0) {
        favorites.push(action.payload)
      }
      if (favorites.length > 0) {
        favorites.map(fav => {
          if (fav.id != action.payload.id) {
            favorites.push(action.payload)
          }
        })
      }
      console.log(favorites)
    }
  }
});

export const { setFavorites } = luxuriousSlice.actions
export default luxuriousSlice.reducer;
