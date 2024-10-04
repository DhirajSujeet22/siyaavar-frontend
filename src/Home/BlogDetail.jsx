import React from "react";

const BlogDetail = () => {
  const contentOrder = [
    {
      id: 1,
      title: "The Kurta Jacket Ensemble – Your Party Armor",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/HP_Blog_Inside_Baraati_KurtaJacket_22-11-2023-13-47?$WT_Blogs_InsideImage$",
    }, // Replace with actual image URL
    {
      id: 2,
      title: "The Kurta Jacket Ensemble – Your Party Armor",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/HP_Blog_Inside_Baraati_Indo_22-11-2023-13-43?$WT_Blogs_InsideImage$",
    },
    {
      id: 3,
      title: "The Kurta Jacket Ensemble – Your Party Armor",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/HP_Blog_Inside_Baraati_Sherwani_22-11-2023-13-48?$WT_Blogs_InsideImage$",
    },
  ];
  const cartItems = [
    {
      id: 1,
      title: "Stylish Kurta",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_WeddingRituals_D_revised_11-08-2023-12-37?$WT_Blogs_Tiles_D%26M$",
    },
    {
      id: 2,
      title: "Elegant Sherwani",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_WeddingChecklist_D_revised_11-08-2023-12-37?$WT_Blogs_Tiles_D%26M$",
    },
    {
      id: 3,
      title: "Traditional Juti",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog%5FTile%5FWeddingTrends%5FDM%5F07%2D11%2D2023%2D05%2D08?$WT%5FBlogs%5FTiles%5FD%26M$",
    },
    {
      id: 3,
      title: "Traditional Juti",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_TileImage_ReceptionOutfits_D-M_14-09-2023-09-05?$WT_Blogs_Tiles_D%26M$",
    },
  ];

  return (
    <>
      <div className="container mx-auto p-4">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center my-10">
          Stories by Manyavar & Mohey
        </h1>

        {/* Banner Image */}
        <div className="mb-8">
          <img
            src="https://manyavar.scene7.com/is/image/manyavar/Blog_Detail_Baraati_D_22-11-2023-13-45?$WT_Blogs_Detailpage_D$" // Replace with the actual banner image URL
            alt="Wedding Celebration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Fashion Guide Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            The One Must-Have Fashion Guide for Baraatis
          </h2>
          <p className="mb-4">
            Picture this: The wedding procession is dancing down the aisle as
            the dhol's beat brings the world to life. Welcome to the Indian
            wedding extravaganza, where you, the Baraati, are the life of the
            party! The role of a Baraati is etched in centuries of heritage.
            It's a role marked by the footprints of joyous dances, the laughter
            shared over auspicious rituals, and the finest attire. You're the
            frontline of the groom's squad, a key player in this vibrant
            celebration. Your mission? To look drop-dead gorgeous while keeping
            it cool through the whirlwind of festivities.
          </p>
          <p>
            To navigate the constellation of wedding events - from the jovial
            Sangeet night, laden with dance and song, to the Haldi, painted in
            the hues of turmeric and joy, and finally to the paramount wedding
            procession and reception - a Baraati's wardrobe is less of clothing
            and more of a garb of festivity. Fret not, we've got the ultimate
            style playbook to make sure you're turning heads at every step
            without breaking a sweat.
          </p>
        </div>

        {/* Kurta Jacket Ensemble Section */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          {/* Right Title and Paragraph */}
          <div className="flex flex-col space-y-8">
            {contentOrder.map((item, index) => (
              <div
                key={item.id}
                className={`flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center gap-5`}
              >
                {/* Image Section */}
                <div className="md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 md:pl-6">
                  <h3 className="text-3xl font-[500] mb-2">{item.title}</h3>
                  <p>
                    First up, the kurta jacket set – a true game-changer in
                    men's ethnic wear. Think premium fabrics like silks and silk
                    blends which look luxurious but feel breezy through endless
                    ceremonies and wild dance-offs. A suave pista green kurta
                    set, a midnight blue ceremonious kurta set, or a wine kurta
                    and black churidar are some timeless festive combinations to
                    include in your wardrobe.
                  </p>
                  <p>
                    Chikankari kurtas with elaborate embroidery, or mirror work
                    and brocade kurtas, that are well-fitted with just enough
                    flair for those impromptu bhangra moves are what you should
                    be looking for. And the jacket? Rich with handwork and
                    sequins, making a statement, ready to be layered on or off
                    according to the event.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-8">
          Accessorising Your Ensemble – The Devil is in the Details
        </h1>

        <p className="mb-6 text-md leading-relaxed">
          Accessories are where you get to play. The Safa, a traditional Indian
          turban, is a crowning glory. It relays a noble touch, speaking volumes
          about your style and is often a hallmark of a baraati. No less
          important is the Dupatta, which, when draped over a Sherwani or
          Bandhgala, adds an ethereal quality to the ensemble. A vibrant dupatta
          can completely change the vibe of an outfit and elevate it to new
          heights. The right footwear, whether it’s a pair of sandals, jutis, or
          loafers, brings definition and character to the ensemble.
        </p>

        <p className="mb-6 text-md leading-relaxed">
          Brooches add that dash of personality to your outfit. Whether pinned
          to the chest or the turban, a brooch is a statement of personal flair.
          From stones that mimic the stars to metalwork that speaks of old-world
          charm, they are subtle indicators of a well-styled look. Don’t forget
          to pair your attire with the right statement maker for every occasion
          that sets you apart as a star of the groom squad.
        </p>

        <p className="mb-6 text-md leading-relaxed">
          And in the details of a pocket square, one finds the quiet sartorial
          sophistication. The right pocket square can pull together an outfit,
          throwing in a splash of color and pattern that echoes or contrasts
          with the larger ensemble. The fold itself is a matter of personal
          expression—whether a sharp geometric line or a softer, puff
          fold—speaking volumes of the wearer’s attention to detail.
        </p>

        <p className="mb-6 text-md leading-relaxed">
          As the wedding saga unfolds, remember, your outfit is an integral part
          of the celebration. It's about embodying the spirit of the wedding,
          from the energetic Baraat to the soulful pheras. Your style is your
          story at the wedding. It's as important as the laughs, the dances, the
          pictures, and the memories. So, as you step into your Baraati avatar,
          embrace the elegance, the comfort, and the joy of being part of
          something truly magical.
        </p>

        <p className="text-md leading-relaxed">
          And when the night ends, and you step out of your ensemble, remember
          that you're leaving behind the story of a day filled with joy, style,
          and unforgettable moments. Here's to you, the Baraati—the heartbeat of
          the wedding, the style icon of the evening!
        </p>

        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-6">You may also like :</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg shadow-md p-4 flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
