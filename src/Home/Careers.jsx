import React from "react";

const Careers = () => {
  return (
    <>
      <div className="mx-auto p-10">
        {/* Title Section */}
        <h1 className="text-center text-4xl font-bold my-10">Careers</h1>

        {/* Content Section */}
        <div className="flex flex-col mt-5 md:flex-row md:space-x-8">
          {/* Left Content */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="mb-4">
              Manyavar was conceptualized in 1999 by Vedant Fashions Limited
              (formerly known as Vedant Fashions Pvt. Ltd.) and was incorporated
              as a company in 2002. Till 2008, its operations focused on
              strengthening its brand in the men’s ethnic wear segment. Manyavar
              started its retail expansion in 2008 and boasts of 452 stores
              spread across 170 cities in 6 countries today. Manyavar culturally
              is a very open organization and various communication tools
              provide channels for ground-level, instantaneous, and real-time
              feedback. All stores are connected in real-time through our ERP
              system; employee communication and engagement across all locations
              is achieved by a single customized tool. Our constant endeavor is
              to live up to our company’s core value of ‘Earn Your Respect’.
            </p>
            <p className="mb-4">
              This expansion is supported by the entire Manyavar Parivar with
              over 900 executives in our own retail outlets, 300 corporate
              office members, about 500 factory and supply chain employees, and
              over 3000 employees who work with our 260+ franchise partners. The
              underlying DNA in every member of the parivar is based on the
              company ethos of ‘Transparency, Fair Play and Care’.
            </p>
            <p>
              The average workforce here is around 24 years of age, so we also
              take up the responsibility of upskilling and rightsizing all
              members. Consequently, a large part of working with Manyavar is
              about self-development and is a rigorous process of identifying
              oneself and one’s own competencies and areas of interest. To be a
              part of our journey, please send us your resume at{" "}
              <a
                href="mailto:career@manyavar.com"
                className="text-blue-600 underline"
              >
                career@manyavar.com
              </a>
              .
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/en_IN/dw71f81e70/images/career_img.jpg" // Replace with your image URL
              alt="Manyavar Careers"
              className="w-[90%] rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
