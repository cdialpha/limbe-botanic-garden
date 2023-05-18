import React from "react";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Exploring the Rich Flora of the African Savannah",
      author: "John Doe",
      preview:
        "Discover the incredible plant diversity found in the vast savannahs of Africa, from iconic acacia trees to unique grass species. Learn about the fascinating adaptations of these plants and their importance in supporting diverse wildlife populations.",
    },
    {
      title: "Conservation Success Story: Saving the Endangered Baobab Tree",
      author: "Jane Smith",
      preview:
        "Learn about the conservation efforts to protect the iconic baobab tree, which is facing threats due to habitat loss and climate change. Explore the unique characteristics of baobabs and the strategies employed to ensure their survival.",
    },
    {
      title: "Uncovering the Medicinal Plants of Africa",
      author: "David Johnson",
      preview:
        "Delve into the world of traditional African medicine and the rich array of medicinal plants found on the continent. Discover the healing properties of various plants and the ongoing research to harness their potential for modern healthcare.",
    },
    {
      title: "Preserving Biodiversity: Endemic Species of African Rainforests",
      author: "Sarah Thompson",
      preview:
        "Explore the lush rainforests of Africa and the remarkable endemic plant species found within them. Learn about the importance of conserving these unique plants and the challenges they face in the face of deforestation and habitat fragmentation.",
    },
  ];
  const editorInChief = "Dr. Olivia Mbakop";
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Botanical Garden Blog
        </h1>
        <div className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Welcome to the LBG Blog
            </h1>
            <p className="text-gray-600 mb-8">
              Explore the wonders of Cameroonian flora and immerse yourself in
              the fascinating world of biodiversity at the Limbe Botanical
              Garden (LBG). Our blog serves as your gateway to insightful
              articles, research findings, and conservation updates, all
              authored by the passionate and knowledgeable staff at LBG.
            </p>
            <p className="text-gray-600 mb-8">
              Led by Editor-in-Chief {editorInChief}, our dedicated team of
              experts is committed to bringing you engaging and informative
              content that showcases the diverse plant species found in Cameroon
              and highlights their significance in the global ecosystem. Through
              our blog, we aim to promote awareness about the importance of
              botanical knowledge, conservation efforts, and sustainable
              practices.
            </p>
            <p className="text-gray-600 mb-8">
              Cameroon is home to a remarkable variety of plant life, from lush
              rainforests to arid savannahs, each housing unique and precious
              species. The blog acts as a platform to share our deep-rooted love
              for these natural treasures, shedding light on their ecological
              importance, cultural significance, and ongoing conservation
              initiatives.
            </p>
            <p className="text-gray-600 mb-8">
              Botanical journalism plays a crucial role in our mission to
              protect and preserve Cameroon&apos;s rich botanical heritage. By
              sharing our knowledge and experiences, we can inspire others to
              appreciate the wonders of nature, raise awareness about
              conservation challenges, and encourage sustainable practices that
              safeguard the delicate balance between humans and the environment.
            </p>
            <p className="text-gray-600 mb-8">
              As an open and inclusive platform, we invite you to be an active
              part of our blog community. If you have any ideas for stories,
              research projects, or conservation initiatives related to
              Cameroonian flora, we welcome your submissions. We believe in the
              power of collective knowledge and collaborative efforts, and
              together, we can celebrate and protect our natural heritage for
              future generations.
            </p>
            <p className="text-gray-600 mb-8">
              Through our blog, you can expect to embark on a virtual journey
              through the diverse landscapes of Cameroon, uncovering the hidden
              secrets of its plant life, and gaining insights into the intricate
              relationships between plants, animals, and ecosystems. Our
              articles cover a wide range of topics, including plant taxonomy,
              ethnobotany, conservation success stories, sustainable gardening
              practices, and much more.
            </p>
            <p className="text-gray-600">
              We invite you to join us in this botanical adventure and discover
              the fascinating world of Cameroonian flora through our regularly
              updated blog. Happy reading!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-slate-100 rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.author}</p>
              <p className="text-gray-600">{post.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
