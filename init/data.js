const sampleListings = [
  {
    title: "Serene Beachside Villa in Goa",
    description: "Relax in this beautiful villa with a private pool, just steps from the sandy beaches of South Goa. Perfect for a family vacation.",
    image: { url: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop", filename: "goa_villa.jpg" },
    price: 25000,
    location: "Goa",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 73.8278, 15.2993 ] }
  },
  {
    title: "Cozy Himalayan Cabin, Manali",
    description: "A charming wooden cabin nestled in the Himalayas. Offers breathtaking views of the snow-capped mountains. Ideal for trekkers and nature lovers.",
    image: { url: "https://plus.unsplash.com/premium_photo-1683888725032-77a464b20a68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D", filename: "manali_cabin.jpg" },
    price: 8000,
    location: "Manali",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 77.1887, 32.2432 ] }
  },
  {
    title: "Royal Heritage Haveli, Jaipur",
    description: "Experience the grandeur of Rajasthan. Stay in a restored haveli with traditional architecture and modern amenities. The Pink City awaits.",
    image: { url: "https://media.istockphoto.com/id/1159873271/photo/residential-area-in-the-city-modern-apartment-buildings.jpg?s=612x612&w=0&k=20&c=edI11N5XbGUx26oYlpMPRipqjNM86aiEpCM1PfuypPw=", filename: "jaipur_haveli.jpg" },
    price: 18000,
    location: "Jaipur",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 75.7873, 26.9124 ] }
  },
  {
    title: "Kerala Backwaters Houseboat",
    description: "Float through the tranquil backwaters of Alleppey on a traditional Kettuvallam. An unforgettable experience of God's Own Country.",
    image: { url: "https://media.istockphoto.com/id/1424381581/photo/large-villa-with-two-floors-and-garden-in-ed.jpg?s=612x612&w=0&k=20&c=a_jIm_vR31sYxRlADFKiqOiti8I3XLWau1581GRtnNU=", filename: "kerala_houseboat.jpg" },
    price: 12000,
    location: "Alleppey",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 76.356, 9.4981 ] }
  },
  {
    title: "Chic Urban Apartment, Mumbai",
    description: "A stylish and modern apartment in the heart of Bandra. Close to trendy cafes, boutiques, and the bustling city life.",
    image: { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", filename: "mumbai_apartment.jpg" },
    price: 9500,
    location: "Mumbai",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 72.8777, 19.0760 ] }
  },
  {
    title: "Tea Plantation Bungalow, Munnar",
    description: "Wake up to the aroma of fresh tea leaves. A colonial-style bungalow set amidst lush green tea gardens in Munnar.",
    image: { url: "https://media.istockphoto.com/id/2223376026/photo/luxury-tropical-pool-villa-at-dusk.jpg?s=612x612&w=0&k=20&c=KmXb1-GWZvz-Fa6TvMKIbNsxfEs09t6Nm5NEzrMBy3E=", filename: "munnar_bungalow.jpg" },
    price: 15000,
    location: "Munnar",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 77.0595, 10.0889 ] }
  },
  {
    title: "Spiritual Retreat near Ganga, Rishikesh",
    description: "A peaceful ashram-style room with a view of the holy Ganga. Perfect for yoga, meditation, and spiritual seekers.",
    image: { url: "https://media.istockphoto.com/id/1171744291/photo/luxury-house-with-pool-and-terrace-for-relaxing.jpg?s=612x612&w=0&k=20&c=JjyYUhKoFafg1jq78uBxJnUQwOkMZXuuzEJ1p0q4opI=", filename: "rishikesh_retreat.jpg" },
    price: 3500,
    location: "Rishikesh",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 78.2676, 30.0869 ] }
  },
  {
    title: "Lakeside Palace View, Udaipur",
    description: "Enjoy stunning views of Lake Pichola and the City Palace from this beautifully decorated room. The Venice of the East awaits.",
    image: { url: "https://media.istockphoto.com/id/1492313721/photo/modern-luxury-villa-with-private-pool-at-night.jpg?s=612x612&w=0&k=20&c=edyOwSOmXGZvRpUmWIVDgCqbiKpKKMebllHG1LWagR4=", filename: "udaipur_lakeview.jpg" },
    price: 22000,
    location: "Udaipur",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 73.7125, 24.5854 ] }
  },
  {
    title: "French Quarter Home, Pondicherry",
    description: "A vibrant and colorful home in the charming French Quarter of Pondicherry. Cobbled streets and colonial architecture at your doorstep.",
    image: { url: "https://media.istockphoto.com/id/960768668/photo/modern-luxury-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=ooaRzYW0iW-5nSje4uw4A34GIekDM6bG6Ukq1AulDcs=", filename: "pondicherry_home.jpg" },
    price: 7000,
    location: "Pondicherry",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 79.8083, 11.9416 ] }
  },
  {
    title: "Luxury Tent in Thar Desert, Jaisalmer",
    description: "Experience desert life with a touch of luxury. Stay in a well-equipped tent under the stars, enjoy camel safaris and folk music.",
    image: { url: "https://media.istockphoto.com/id/526552041/photo/portofino-bay.jpg?s=612x612&w=0&k=20&c=gTaQ-GkoEoGkICtnFTCpGSDlyyvWR7MbMlZqB07KiY0=", filename: "jaisalmer_tent.jpg" },
    price: 11000,
    location: "Jaisalmer",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 70.9083, 26.9157 ] }
  },
  {
    title: "Artistic Studio in Kolkata",
    description: "A creative and inspiring studio apartment in the cultural heart of Kolkata, perfect for artists and writers.",
    image: { url: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop", filename: "kolkata_studio.jpg" },
    price: 4500,
    location: "Kolkata",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 88.3639, 22.5726 ] }
  },
  {
    title: "High-Altitude Stay in Leh, Ladakh",
    description: "Experience the unique landscape of Ladakh. A simple, clean room offering panoramic views of the stark mountains.",
    image: { url: "https://media.istockphoto.com/id/1223059837/photo/cityscape-of-a-modern-residential-area-with-apartment-buildings-new-green-urban-landscape-in.jpg?s=612x612&w=0&k=20&c=UWmzWnHmiLmBF32B6KaNl9acntTWGFrZgjidWat8UXo=", filename: "leh_stay.jpg" },
    price: 6000,
    location: "Leh",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 77.5819, 34.1526 ] }
  },
  {
    title: "Riverside Cottage in Coorg",
    description: "A quaint cottage by the river in the 'Scotland of India'. Surrounded by coffee plantations and misty hills.",
    image: { url: "https://media.istockphoto.com/id/653532812/photo/senior-couple-on-sun-loungers-at-luxury-holiday-apartment.jpg?s=612x612&w=0&k=20&c=BoNVSNH-TTSz2D5_zSVO_LMVsiH3UXz2GJ_NutjO0nM=", filename: "coorg_cottage.jpg" },
    price: 9000,
    location: "Coorg",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 75.7397, 12.4244 ] }
  },
  {
    title: "Historic Fort View, Jodhpur",
    description: "Stay in the Blue City with a direct view of the magnificent Mehrangarh Fort. A traditional Rajasthani home experience.",
    image: { url: "https://media.istockphoto.com/id/1393538022/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=JA6u4z_Mj2ZWHKPJqnATqpUPlrGBzavUXRhNE-5RYTw=", filename: "jodhpur_fortview.jpg" },
    price: 13000,
    location: "Jodhpur",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 73.0243, 26.2389 ] }
  },
  {
    title: "Minimalist Studio, Delhi",
    description: "A clean and minimalist studio in a quiet neighborhood of South Delhi. Perfect for solo travelers or business trips.",
    image: { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop", filename: "delhi_studio.jpg" },
    price: 5500,
    location: "Delhi",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 77.2090, 28.6139 ] }
  },
  {
    title: "Ganges View Room, Varanasi",
    description: "Witness the ancient rituals of Varanasi from your room. A simple guesthouse offering unparalleled views of the ghats.",
    image: { url: "https://media.istockphoto.com/id/1540164261/photo/luxury-house-with-swimming-pool-at-night.jpg?s=612x612&w=0&k=20&c=Kn3PlF8SLKpfr23NV2DZbWWPrIQU5OBf6mwz4JXfWAE=", filename: "varanasi_gangaview.jpg" },
    price: 2500,
    location: "Varanasi",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 82.9739, 25.3176 ] }
  },
  {
    title: "Colonial Charm in Shimla",
    description: "Step back in time in this colonial-era hotel. Enjoy the cool mountain air and panoramic views of the Himalayan foothills.",
    image: { url: "https://media.istockphoto.com/id/2207313531/photo/lively-beachfront-scene-at-dusk-in-goa-india.jpg?s=612x612&w=0&k=20&c=MlzapRNQVCozUemr4GFn4mR0CKB37WiygaH1SPvFQ6s=", filename: "shimla_colonial.jpg" },
    price: 10500,
    location: "Shimla",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 77.1734, 31.1048 ] }
  },
  {
    title: "Kanchenjunga View Homestay, Darjeeling",
    description: "Wake up to a glorious sunrise over the Kanchenjunga range. A warm and welcoming homestay in the Queen of Hills.",
    image: { url: "https://media.istockphoto.com/id/1367954158/photo/residential-district-with-luxury-villas-walking-path-and-palm-trees.jpg?s=612x612&w=0&k=20&c=jN_Wvd5rM9m4hnHO724DFxEeSuKknzM0dWKZY9Hp118=", filename: "darjeeling_homestay.jpg" },
    price: 4000,
    location: "Darjeeling",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 88.2636, 27.0410 ] }
  },
  {
    title: "Luxury Suite near Taj Mahal, Agra",
    description: "A lavish suite in a 5-star hotel offering views of the iconic Taj Mahal. Experience unmatched luxury and hospitality.",
    image: { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop", filename: "agra_suite.jpg" },
    price: 35000,
    location: "Agra",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 78.0081, 27.1767 ] }
  },
  {
    title: "Bohemian Hideout in Hampi",
    description: "A rustic and artistic guesthouse amidst the ancient ruins of Hampi. Perfect for backpackers and history enthusiasts.",
    image: { url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop", filename: "hampi_hideout.jpg" },
    price: 1200,
    location: "Hampi",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 76.4600, 15.3350 ] }
  },
  {
    title: "Quaint Cottage in Ooty",
    description: "A beautiful cottage surrounded by the Nilgiri mountains. Enjoy the toy train, botanical gardens, and cool weather.",
    image: { url: "https://media.istockphoto.com/id/2046945081/photo/modern-style-luxury-black-living-room-with-city-view-in-the-night-3d-render.jpg?s=612x612&w=0&k=20&c=EptmKtc17Hg_1JloU11XTQdxmXoWBIC0mCwXeXimk08=", filename: "ooty_cottage.jpg" },
    price: 7500,
    location: "Ooty",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 76.7050, 11.4121 ] }
  },
  {
    title: "Forest Cabin in Kodaikanal",
    description: "A secluded cabin in the 'Princess of Hill Stations'. Perfect for a romantic getaway amidst pine forests and misty valleys.",
    image: { url: "https://media.istockphoto.com/id/1198357646/photo/luxury-apartment-with-private-pool.jpg?s=612x612&w=0&k=20&c=DppEBRtR0seXZzvN02VgbtNaNYGyT1Sn0vfL1R3lr6Q=", filename: "kodaikanal_cabin.jpg" },
    price: 8500,
    location: "Kodaikanal",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 77.4892, 10.2381 ] }
  },
  {
    title: "Andaman Beach Hut",
    description: "A simple yet charming beach hut on Havelock Island. Crystal clear waters and white sandy beaches are your playground.",
    image: { url: "https://media.istockphoto.com/id/915045118/photo/modern-apartment-buildings-in-a-green-residential-area-in-the-city.jpg?s=612x612&w=0&k=20&c=Z6MemybhHAm2AhE_V8-Oub-rIgevXNxT8aIC7_Yns-c=", filename: "andaman_hut.jpg" },
    price: 6500,
    location: "Havelock Island",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 92.9866, 11.9768 ] }
  },
  {
    title: "Garden City Penthouse, Bangalore",
    description: "A luxurious penthouse with a rooftop garden in Bangalore. Enjoy the city's pleasant weather and vibrant nightlife.",
    image: { url: "https://media.istockphoto.com/id/2161174551/photo/tv-wall-mountain-with-units-near-the-panoramic-window-and-in-front-of-the-bed-3d-rendering.jpg?s=612x612&w=0&k=20&c=XFYmI0BNWuAJ3l5-aDoaNAdkPnr1KTKA8PwiM5y9xCk=", filename: "bangalore_penthouse.jpg" },
    price: 16000,
    location: "Bangalore",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 77.5946, 12.9716 ] }
  },
  {
    title: "Valley View Room, Mussoorie",
    description: "A comfortable room in a hotel offering stunning views of the Doon Valley. The Queen of the Hills invites you.",
    image: { url: "https://media.istockphoto.com/id/157525171/photo/villa-sunrise.jpg?s=612x612&w=0&k=20&c=l5eQDGar2pVuGOsuBoNYyUsPs1BPZ4_JmPMubVkC-vE=", filename: "mussoorie_valleyview.jpg" },
    price: 7800,
    location: "Mussoorie",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 78.0794, 30.4598 ] }
  },
  {
    title: "Beachfront Resort, Mahabalipuram",
    description: "Stay at a serene resort with ancient temples and rock carvings nearby. A blend of history and relaxation.",
    image: { url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop", filename: "mahabalipuram_resort.jpg" },
    price: 14000,
    location: "Mahabalipuram",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 80.1933, 12.6268 ] }
  },
  {
    title: "Orchard Farmstay, Himachal",
    description: "A rustic farmstay surrounded by apple orchards. Experience authentic Himachali culture and cuisine.",
    image: { url: "https://media.istockphoto.com/id/2160382979/photo/the-perfect-combination-stylish-and-luxury-interior-design-with-a-craft-wooden-table-and.jpg?s=612x612&w=0&k=20&c=HsGPnXRLAW7gdizVZr2cmSCVkbe_QqhY43pFHPHcN7g=", filename: "himachal_farmstay.jpg" },
    price: 5000,
    location: "Kotgarh",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 77.4938, 31.3283 ] }
  },
  {
    title: "Tech Hub Studio, Hyderabad",
    description: "A modern and efficient studio apartment located close to Hyderabad's IT hub. Ideal for business travelers.",
    image: { url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop", filename: "hyderabad_studio.jpg" },
    price: 6200,
    location: "Hyderabad",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 78.4867, 17.3850 ] }
  },
  {
    title: "Peaceful Pune Homestay",
    description: "A quiet and comfortable room in a family home. Experience the relaxed pace of life in Pune, the Oxford of the East.",
    image: { url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop", filename: "pune_homestay.jpg" },
    price: 3000,
    location: "Pune",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 73.8567, 18.5204 ] }
  },
  {
    title: "Meghalaya Cloud Villa",
    description: "Stay in a villa that feels like it's floating in the clouds. Experience the monsoons in Cherrapunji, one of the wettest places on Earth.",
    image: { url: "https://media.istockphoto.com/id/1191376167/photo/island-villa.jpg?s=612x612&w=0&k=20&c=qJNjEwEFRJpJuitWhq_loxq4ECfQX4mgekhv4JedxgQ=", filename: "meghalaya_villa.jpg" },
    price: 13500,
    location: "Cherrapunji",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 91.7323, 25.2742 ] }
  },
  {
    title: "Sikkim Monastery View",
    description: "A room in a guesthouse with direct views of the Rumtek Monastery. A serene and spiritual experience in the mountains.",
    image: { url: "https://media.istockphoto.com/id/2229680867/photo/modern-tiny-houses-with-forest-background.jpg?s=612x612&w=0&k=20&c=zqjoXyhvMQE7BCFnJhIrjJNO-sFDYYe96XplYaoRRhk=", filename: "sikkim_monasteryview.jpg" },
    price: 4800,
    location: "Gangtok",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 88.6065, 27.3389 ] }
  },
  {
    title: "Budget Backpacker Hostel, Goa",
    description: "A lively and affordable hostel in North Goa, close to the beaches and nightlife. Perfect for meeting new people.",
    image: { url: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1935&auto=format&fit=crop", filename: "goa_hostel.jpg" },
    price: 900,
    location: "Anjuna, Goa",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 73.7436, 15.5786 ] }
  },
  {
    title: "Lake View Apartment, Nainital",
    description: "A comfortable apartment overlooking the beautiful Naini Lake. Enjoy boating, cool weather, and scenic views.",
    image: { url: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?q=80&w=2070&auto=format&fit=crop", filename: "nainital_apartment.jpg" },
    price: 6800,
    location: "Nainital",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 79.4636, 29.3803 ] }
  },
  {
    title: "Designer Loft, Gurgaon",
    description: "A high-end designer loft with all modern amenities. Located in the corporate hub of Gurgaon.",
    image: { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop", filename: "gurgaon_loft.jpg" },
    price: 11500,
    location: "Gurgaon",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 77.0266, 28.4595 ] }
  },
  {
    title: "Peaceful Farmhouse near Chandigarh",
    description: "Escape the city to this modern farmhouse. Features a large garden, fresh air, and tranquility.",
    image: { url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop", filename: "chandigarh_farmhouse.jpg" },
    price: 17000,
    location: "Near Chandigarh",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 76.7794, 30.7333 ] }
  },
  {
    title: "Spiti Valley Homestay",
    description: "A traditional homestay in the remote and stunning Spiti Valley. Experience the cold desert and ancient monasteries.",
    image: { url: "https://media.istockphoto.com/id/2224849128/photo/maldives.jpg?s=612x612&w=0&k=20&c=cMl6AMkgz_TZkE94L9lIxzydt6mdWNq0aGHDZSL2Zr8=", filename: "spiti_homestay.jpg" },
    price: 3200,
    location: "Kaza, Spiti",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 78.0722, 32.2266 ] }
  },
  {
    title: "Kashmiri Houseboat, Dal Lake",
    description: "A beautifully carved wooden houseboat on Dal Lake, Srinagar. Enjoy shikara rides and floating markets.",
    image: { url: "https://media.istockphoto.com/id/2224218651/photo/historic-rajasthani-mansion-courtyard-authentic-ornate-architecture-at-twilight.jpg?s=612x612&w=0&k=20&c=_xfqvHViTgt-FEjKwPE-ix435AoCwSqM0GQexB8oT4k=", filename: "kashmir_houseboat.jpg" },
    price: 9800,
    location: "Srinagar",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 74.8258, 34.0837 ] }
  },
  {
    title: "Golf Course Villa, Noida",
    description: "A modern villa overlooking a lush green golf course. A quiet and luxurious stay in the NCR.",
    image: { url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop", filename: "noida_villa.jpg" },
    price: 19500,
    location: "Noida",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 77.3910, 28.5355 ] }
  },
  {
    title: "Beach Shack Stay, Varkala",
    description: "A simple and rustic shack on the cliffs of Varkala beach. Famous for its stunning sunsets.",
    image: { url: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1974&auto=format&fit=crop", filename: "varkala_shack.jpg" },
    price: 2800,
    location: "Varkala",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 76.7161, 8.7371 ] }
  },
  {
    title: "City Center Hotel, Chennai",
    description: "A comfortable hotel room in the heart of Chennai, providing easy access to Marina Beach and cultural landmarks.",
    image: { url: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1974&auto=format&fit=crop", filename: "chennai_hotel.jpg" },
    price: 7200,
    location: "Chennai",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 80.2707, 13.0827 ] }
  },
  {
    title: "Eco-friendly Mud House, Wayanad",
    description: "Stay in a unique, eco-friendly mud house in the green hills of Wayanad, Kerala. A true nature experience.",
    image: { url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2070&auto=format&fit=crop", filename: "wayanad_mudhouse.jpg" },
    price: 6500,
    location: "Wayanad",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 76.1320, 11.6854 ] }
  },
  {
    title: "Rock Garden Proximity, Chandigarh",
    description: "A modern apartment located conveniently close to the famous Rock Garden and Sukhna Lake.",
    image: { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", filename: "chandigarh_apartment.jpg" },
    price: 8800,
    location: "Chandigarh",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 76.7794, 30.7333 ] }
  },
  {
    title: "Golden Temple View, Amritsar",
    description: "A room in a guesthouse that offers a view of the serene Golden Temple. Experience the spiritual heart of Sikhism.",
    image: { url: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?q=80&w=2070&auto=format&fit=crop", filename: "amritsar_goldentempleview.jpg" },
    price: 4300,
    location: "Amritsar",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 74.8765, 31.6200 ] }
  },
  {
    title: "Dharamshala Mountain Homestay",
    description: "A welcoming homestay in the peaceful town of Dharamshala, home to the Dalai Lama. Great for McLeod Ganj explorers.",
    image: { url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop", filename: "dharamshala_homestay.jpg" },
    price: 3800,
    location: "Dharamshala",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 76.3236, 32.2190 ] }
  },
  {
    title: "Sundarbans Riverside Resort",
    description: "A unique resort on the edge of the Sundarbans mangrove forest. Spot wildlife and experience the unique delta ecosystem.",
    image: { url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop", filename: "sundarbans_resort.jpg" },
    price: 9200,
    location: "Sundarbans",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 88.8558, 21.9497 ] }
  },
  {
    title: "Mysore Palace Heritage Hotel",
    description: "Stay in a wing of a heritage property near the famous Mysore Palace. Experience the royal past of Karnataka.",
    image: { url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop", filename: "mysore_palacehotel.jpg" },
    price: 16500,
    location: "Mysore",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 76.6552, 12.3052 ] }
  },
  {
    title: "Surfer's Paradise, Kovalam",
    description: "A laid-back guesthouse just a minute's walk from Kovalam's surfing beach. Perfect for wave riders.",
    image: { url: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1935&auto=format&fit=crop", filename: "kovalam_surfers.jpg" },
    price: 2200,
    location: "Kovalam",
    country: "India",
    owner: '68a6d658c3be7ffa14c3751f',
    geometry: { type: 'Point', coordinates: [ 76.9772, 8.3998 ] }
  }
];

module.exports = { data: sampleListings };