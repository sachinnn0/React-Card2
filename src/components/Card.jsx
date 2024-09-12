import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1636569061713-0212bd19e3e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHNwaWRlcm1hbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "404",
      description: "Something went wrong check the connection",
      button: "Back",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559535332-db9971090158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRob3J8ZW58MHx8MHx8fDA%3D",
      title: "Not found",
      description: "Employee are not available right now",
      button: "More",
    },
    {
      image:
        "https://images.unsplash.com/photo-1669798739240-22286804df30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRob3J8ZW58MHx8MHx8fDA%3D",
      title: "Done",
      description: "Location sent successfully.preview the map",
      button: "Preview",
    },
    {
      image:
        "https://images.unsplash.com/photo-1594344041337-0223bd103abe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cGVybWFufGVufDB8fDB8fHww",
      title: "Launched",
      description: "Now the whole world will one your work",
      button: "Share",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590341328520-63256eb32bc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1cGVybWFufGVufDB8fDB8fHww",
      title: "OTP sent",
      description: "Please keep it private and dont share to anyone",
      button: "See",
    },
    {
      image:
        "https://images.unsplash.com/photo-1674448417387-345997fcd888?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1cGVybWFufGVufDB8fDB8fHww",
      title: "Storage full",
      description: "Something wert wrong check the connection",
      button: "Clear",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542623024-a797a755b8d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVsa3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Joined",
      description: "Now youll able to access all the content on the clan",
      button: "Check out",
    },
    {
      image:
        "https://images.unsplash.com/photo-1608889825146-c9276dc26bdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bGt8ZW58MHx8MHx8fDA%3D",
      title: "Hurry",
      description: "You completed all tasks and reached the end.",
      button: "Ranking",
    },
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-red-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {data.map((elem, index) => (
          <div key={index} className="w-56 h-64 bg-zinc-300 rounded-md overflow-hidden">
            <div className="h-1/2 w-full">
              <img
                className="h-full w-full object-cover object-top "
                src={elem.image}
                alt=""
              />
            </div>
            <div className="h-1/2 w-full text-center p-1 bg-white">
              <h1 className="font-bold text-xl">{elem.title}</h1>
              <h2 className="mb-1">
                {elem.description}
              </h2>
              <button className="text-sm px-4 py-1 mt-1 bg-yellow-600 rounded-full">
                {elem.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
