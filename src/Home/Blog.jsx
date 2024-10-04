import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const stories = [
    {
      id: 1,
      title: "Story Title 1",
      date: "October 1, 2024",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Indo_Tile_DM_22-12-2023-05-54?$WT_Blogs_Tiles_D%26M$",
      link: "/blogDetails", // Add link for each story
    },
    {
      id: 2,
      title: "Story Title 2",
      date: "October 2, 2024",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tile_Baraati_DM_22-11-2023-13-46?$WT_HP_Blogs_D%2FM$",
      link: "/blogDetails",
    },
    {
      id: 3,
      title: "Story Title 3",
      date: "October 3, 2024",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tile_Bridesmaids_DM_14-11-2023-08-07",
      link: "/blogDetails",
    },
    {
      id: 4,
      title: "Story Title 4",
      date: "October 4, 2024",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tile_DiwaliOutfits_DM_03-11-2023-10-13?$WT_Blogs_Tiles_D%26M$",
      link: "/blogDetails",
    },
    {
      id: 4,
      title: "Story Title 4",
      date: "October 4, 2024",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tile_DiwaliOutfits_DM_03-11-2023-10-13?$WT_Blogs_Tiles_D%26M$",
      link: "/blogDetails",
    },
    {
      id: 4,
      title: "Story Title 4",
      date: "October 4, 2024",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tile_DiwaliOutfits_DM_03-11-2023-10-13?$WT_Blogs_Tiles_D%26M$",
      link: "/blogDetails",
    },
    {
      id: 4,
      title: "Story Title 4",
      date: "October 4, 2024",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tile_DiwaliOutfits_DM_03-11-2023-10-13?$WT_Blogs_Tiles_D%26M$",
      link: "/blogDetails",
    },
    {
      id: 4,
      title: "Story Title 4",
      date: "October 4, 2024",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tile_DiwaliOutfits_DM_03-11-2023-10-13?$WT_Blogs_Tiles_D%26M$",
      link: "/blogDetails",
    },
    {
      id: 4,
      title: "Story Title 4",
      date: "October 4, 2024",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tile_DiwaliOutfits_DM_03-11-2023-10-13?$WT_Blogs_Tiles_D%26M$",
      link: "/blogDetails",
    },
    {
      id: 4,
      title: "Story Title 4",
      date: "October 4, 2024",
      image:
        "https://manyavar.scene7.com/is/image/manyavar/Blog_Tile_DiwaliOutfits_DM_03-11-2023-10-13?$WT_Blogs_Tiles_D%26M$",
      link: "/blogDetails",
    },
    // You can add more stories here...
  ];

  return (
    <>
      <div className="mx-auto">
        <div className="relative mb-8">
          <img
            src="https://manyavar.scene7.com/is/image/manyavar/Blog_Carousel_WeddingChecklist_D_revised_11-08-2023-12-37?$WT_Blogs_Banner_D$"
            alt="Banner"
            className="w-full object-cover"
          />
        </div>

        <h1 className="text-center text-4xl font-bold my-[4rem]">
          STORIES BY MANYAVAR & MOHEY
        </h1>

        <div className="grid px-10 my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Link to={story.link}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full object-cover"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{story.title}</h2>
                <p className="text-gray-600">{story.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
