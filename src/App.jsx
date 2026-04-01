import "./App.css";

function App() {
  const courses = [
    {
      title: "System Administration and IT Infrastructure Services",
    },
    {
      title: "Operating Systems Becoming a Power User",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
    },
    {
      title: "Technical Support Fundamentals",
    },
    {
      title: "How to Succeed at: Writing Applications",
    },
    {
      title: "Medicine Administration for Carers",
    },
  ];

  return (
    <>
      <div className="p-6 grid md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="shadow rounded-lg overflow-hidden flex flex-col hover:border hover:border-black-300 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            {/* Image */}
            <img
              src="https://www.placehold.co/300x200"
              alt={course.title}
              className="w-full h-44 object-cover"
            />

            {/* Content */}
            {/* Content */}
            <div className="p-4 bg-yellow-200 flex-col justify-between h-full">
              <h3 className="text-lg font-semibold mb-4">{course.title}</h3>

              <div className="bg-yellow-100 p-2 rounded-lg">
                <div className="text-sm text-yellow-800 flex justify-between mt-2">
                  <span>👥 123 users</span>
                  <span>⏱ 60 min</span>
                </div>

                {/* Author */}
                <div className="mt-3 mb-2 flex items-center gap-2">
                  <img
                    src="https://www.placehold.co/50x50"
                    alt="Author's Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Author's Name</p>
                    <p className="text-xs text-yellow-800">Designer</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between  ">
                <div className="bg-yellow-100 py-2 px-4 rounded">$123</div>
                <button className="bg-yellow-500 hover:bg-yellow-900 active:bg-yellow-500 text-white px-4 py-2 rounded text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
