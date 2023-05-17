import React from "react";
import Image from "next/image";
import dormitory from "../public/dormitory.png";

const QuickSummary = () => {
  return (
    <div className="pt-10 pb-10 flex flex-col">
      <div className="z-10 ml-auto mr-auto mt-5 md:mt-auto">
        <Image
          src={dormitory}
          height={300}
          width={500}
          alt="architectural background for hero image"
        />
      </div>
      <div className="flex flex-col md:flex-row w-11/12 max-w-screen-2xl ml-5 mr-5 md:ml-auto md:mr-auto bg-glass-light backdrop-blur-sm md:bg-transparent rounded-2xl md:mb-20 mt-10">
        The garden has around 1,500 taxa (1,000 herbaceous and 500 woody
        plants).There are rare or threatened plants: 150 endemic, 100 from the
        southwest, including Calamus, Prunus africana and Gnetum. Certain plants
        are the subject of particular attention, in particular the African palm
        trees, the endemics of Mount Cameroon and the Musa. Others are
        cultivated for conservation purposes: Irvingia gabonensis, Garcinia
        kola, Afrostyrax kamerunensis, Cola spp., Prunus africana, Gnetum,
        Pterocarpus soyauxii, Diospyros, Rauvolfia vomitoria, Nauclea
        diderrichii, Terminalia spp., Annickia chlorantha, Eremomastax speciosa
        , Bryophyllum spp. and Physostigma venenosum.The botanical garden also
        houses a herbarium which held around 21,000 specimens in 2001 and, more
        recently, 30,000.Its acronym in the Index Herbariorum is SCA.
        <div className="text-black md:text-primary-light text-center text-sm md:text-2xl mt-5 mb-5 md:mt-auto md:mb-auto ml-2 mr-2"></div>
      </div>
    </div>
  );
};

export default QuickSummary;
