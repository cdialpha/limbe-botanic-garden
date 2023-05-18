import React from "react";
import CatalogCard from "../../components/CatalogCard";
import StationCard from "../../components/StationCard";

const EcologyPage = () => {
  return (
    <div className="bg-white py-8 relative top-[80px]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Limbe Botanical Garden&apos;s Plant Catalog
        </h1>
        <p className="text-lg mb-8">
          Explore the diverse flora of Cameroon, a country known for its
          ecological and geographical richness. From the lush rainforests in the
          south to the picturesque mountains in the northwest and the expansive
          savannahs in the north, Cameroon boasts a wide range of ecosystems
          that support a remarkable variety of plant species.
        </p>
        <h2 className="text-2xl font-bold mb-4">Research Stations</h2>
        <p className="text-lg mb-8">
          Our botanical garden collaborates with three renowned research
          stations across Cameroon. These stations serve as key sites for the
          collection and study of plants, enabling us to showcase the
          country&apos;s botanical treasures:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <li>
            <StationCard
              title="Limbe Botanic Garden Research Station"
              location="Limbe"
              description="Collecting and studying plant species from the coastal rainforests."
            />
          </li>
          <li>
            <StationCard
              title="Mbalmayo Botanic Garden Research Station"
              location="Mbalmayo"
              description="Focused on plant diversity research in the central region of Cameroon."
            />
          </li>
          <li>
            <StationCard
              title="Maroua Botanic Garden Research Station"
              location="Maroua"
              description="Exploring the unique flora of the northern savannah ecosystems."
            />
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">
          Cameroonian National Herbarium
        </h2>
        <p className="text-lg mb-8">
          Our botanical garden maintains a close partnership with the
          Cameroonian National Herbarium, located in Yaounde. The herbarium
          plays a crucial role in plant taxonomy, identification, and
          preservation. Through this collaboration, we ensure that our plant
          catalog is comprehensive, accurate, and aligned with national
          botanical research efforts.
        </p>
        <h2 className="text-2xl font-bold mb-4">Featured Plants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CatalogCard
            title="African Violet"
            scientificName="Saintpaulia ionantha"
            ecosystem="Rainforest"
            range="Coastal and southern regions"
            description="Known for its beautiful purple flowers, the African Violet is a popular houseplant and is believed to have medicinal properties."
          />
          <CatalogCard
            title="Baobab Tree"
            scientificName="Adansonia"
            ecosystem="Savannah"
            range="Throughout Cameroon"
            description="With its iconic silhouette and nutrient-rich fruit, the Baobab tree is not only a cultural symbol but also a valuable resource for food and medicine."
          />
          <CatalogCard
            title="Rafflesia Flower"
            scientificName="Rafflesia arnoldii"
            ecosystem="Rainforest"
            range="Southwestern region"
            description="The Rafflesia is known for its gigantic size and unique smell     that resembles rotting flesh. Although it has no leaves or stems, this parasitic plant is of great scientific interest."
          />
          <CatalogCard
            title="Prickly Pear Cactus"
            scientificName="Opuntia"
            ecosystem="Semi-arid regions"
            range="Northern and central regions"
            description="The Prickly Pear Cactus is a hardy plant adapted to arid environments. Its edible fruits and pads are widely used in traditional cuisine and as a natural remedy."
          />
        </div>
      </div>
    </div>
  );
};

export default EcologyPage;
