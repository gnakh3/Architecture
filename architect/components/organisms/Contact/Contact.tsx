const Contact = () => {
  return (
    <div>
      

      <section className="relative w-full">
        
        <div className="relative w-full lg:h-[720px]">
          
          <div className="relative w-full lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[40%]">
            {/* Placeholder of image */}
            <div className="h-[280px] w-full bg-[#1B1D23] md:h-[360px] lg:h-full" />
          </div>

          {/* Contact text */}
          <div
            className="
              pointer-events-none
              absolute left-6 top-10
              text-[72px] font-bold text-white/80
              md:left-10 md:top-14 md:text-[120px]
              lg:left-[18%] lg:top-20 lg:text-[160px]
            "
          >
            Contact
          </div>
        </div>

        {/* white part */}
        <div
          className="
            relative
            mx-6 -mt-20
            bg-white
            px-6 py-10
            md:mx-10 md:-mt-24 md:px-10 md:py-14

            lg:absolute lg:right-0 lg:top-[210px]
            lg:mx-0 lg:mt-0
            lg:h-[503px] lg:w-[793px]
            lg:px-16 lg:py-20
          "
        >
          
            
          <div className="max-w-[520px]">
            <div className="mb-8 h-px w-16 bg-black/20" />

            <h1 className="text-[40px] font-bold leading-[40px] md:text-[56px] md:leading-[56px]">
              Tell us about <br className="hidden md:block" />
              your project
            </h1>

            <p className="mt-6 text-[15px] leading-[25px] text-black/60">
              We'd love to hear more about your project. Please, leave a message
              below or give us a call. We have two offices, one in Texas and one in
              Tennessee. If you find yourself nearby, come say hello!
            </p>
          </div>
  
        </div>
      </section>
    </div>
  );
};

export default Contact;
