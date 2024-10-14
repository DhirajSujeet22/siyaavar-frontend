import React from "react";

const dummyOrderData = [
  {
    orderId: "123456",
    date: "2023-10-01",
    total: "$150.00",
    paymentMethod: "Credit Card",
    items: [
      {
        name: "Product 1",
        quantity: 2,
        price: "$50.00",
        imageUrl:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Product 2",
        quantity: 1,
        price: "$50.00",
        imageUrl:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
      },
    ],
  },
  {
    orderId: "123457",
    date: "2023-10-05",
    total: "$200.00",
    paymentMethod: "PayPal",
    items: [
      {
        name: "Product 3",
        quantity: 1,
        price: "$100.00",
        imageUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Product 4",
        quantity: 2,
        price: "$50.00",
        imageUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    orderId: "123458",
    date: "2023-10-10",
    total: "$250.00",
    paymentMethod: "Debit Card",
    items: [
      {
        name: "Product 5",
        quantity: 1,
        price: "$150.00",
        imageUrl:
          "https://images.unsplash.com/photo-1556912990-ddf7c084bebf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Product 6",
        quantity: 2,
        price: "$50.00",
        imageUrl:
          "https://images.unsplash.com/photo-1556912990-ddf7c084bebf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    orderId: "123459",
    date: "2023-10-12",
    total: "$350.00",
    paymentMethod: "Apple Pay",
    items: [
      {
        name: "Product 7",
        quantity: 1,
        price: "$250.00",
        imageUrl:
          "https://images.unsplash.com/photo-1542293787939-c9e299b88078?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Product 8",
        quantity: 2,
        price: "$50.00",
        imageUrl:
          "https://images.unsplash.com/photo-1542293787939-c9e299b88078?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },
  {
    orderId: "123460",
    date: "2023-10-15",
    total: "$450.00",
    paymentMethod: "Google Pay",
    items: [
      {
        name: "Product 9",
        quantity: 1,
        price: "$350.00",
        imageUrl:
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Product 10",
        quantity: 2,
        price: "$50.00",
        imageUrl:
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },
  {
    orderId: "123461",
    date: "2023-10-20",
    total: "$500.00",
    paymentMethod: "Cash on Delivery",
    items: [
      {
        name: "Product 11",
        quantity: 1,
        price: "$400.00",
        imageUrl:
          "https://images.unsplash.com/photo-1516979187457-637abb4f9353?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Product 12",
        quantity: 2,
        price: "$50.00",
        imageUrl:
          "https://images.unsplash.com/photo-1516979187457-637abb4f9353?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },
  {
    orderId: "123462",
    date: "2023-10-25",
    total: "$600.00",
    paymentMethod: "Bank Transfer",
    items: [
      {
        name: "Product 13",
        quantity: 1,
        price: "$500.00",
        imageUrl:
          "https://images.unsplash.com/photo-1580894894513-15d3c84af1e0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Product 14",
        quantity: 2,
        price: "$50.00",
        imageUrl:
          "https://images.unsplash.com/photo-1580894894513-15d3c84af1e0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },
];

const OrderHistory = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 ">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Order History
      </h1>
      {dummyOrderData.map((order) => (
        <div key={order.orderId} className="bg-transparent border-[1px] rounded-md border-gray-400 p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                Order #{order.orderId}
              </h2>
              <p className="text-gray-500">Date: {order.date}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Total: {order.total}</p>
              <p className="text-gray-500">Payment: {order.paymentMethod}</p>
            </div>
          </div>
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-transparent p-4 rounded-md"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-700">{item.price}</p>
                  <button className="bg-[#e95827] text-white hover:bg-[#852201] transition ease-in px-4 py-2 rounded">
                    Order Again
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
