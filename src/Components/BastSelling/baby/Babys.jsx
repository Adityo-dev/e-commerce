import Baby from "./Baby";

const Babys = () => {
  const babys = [
    {
      id: 1,
      cover: "https://i.ibb.co/syRdz10/babystroller-1-1024x1024.webp",
      name: "O. Baby Stroller",
      title:
        " But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      details: "A contemporary romance",
      price: 70.49,
      credit: "Author 9",
    },

    {
      id: 2,
      cover: "https://i.ibb.co/g6HbRvf/Bodysuits-2-600x.webp",
      name: "Z. Baby Bodysuits",
      title:
        " But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder...",
      details: "A romantic comedy",
      price: " 70.00",
      credit: "Author 2",
    },
    {
      id: 3,
      cover: "https://i.ibb.co/JHyHW4H/baby-hat-2-600x.webp",
      name: "U. Baby Knit Hat",
      title:
        " Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis ...",
      details: "A historical fiction",
      price: "79.00",
      credit: "Author 3",
    },
    {
      id: 4,
      cover: "https://i.ibb.co/bJ7VyPT/baby-2-600x.webp",
      name: "Q. Baby Handwork Frock",
      title:
        " The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar",
      details: "A sci-fi epic",
      price: "55.00",
      credit: "Author 4",
    },
    {
      id: 5,
      cover: "https://i.ibb.co/PDLC1vT/Baby-Slipper-2-600x.webp",
      name: "Xa. Baby Slipper",
      title:
        " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      details: "A self-help guide",
      price: "55.00",
      credit: "Author 5",
    },
    {
      id: 6,
      cover: "https://i.ibb.co/nQ8s7Gf/2-600x.webp",
      name: "X. Baby Stylist Sunglass",
      title:
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      details: "A mystery thriller",
      price: "110.00",
      credit: "Author 6",
    },
    {
      id: 7,
      cover: "https://i.ibb.co/1bTGNZD/baby-and-kid-shoe-2-600x.webp",
      name: "R. Baby and Kid Shoe",
      title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      details: "A fantasy adventure",
      price: "55.00",
      credit: "Author 7",
    },
    {
      id: 8,
      cover: "https://i.ibb.co/bmTdD5V/baby-dress-2-600x.webp",
      name: "K. Baby frock",
      title:
        "Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttit..    ",
      details: "A psychological drama",
      price: "39.00",
      credit: "Author 8",
    },
    {
      id: 9,
      cover: "https://i.ibb.co/VCspxBL/necklaces-locket-2-600x.webp",
      name: "Ua. Necklace Locket",
      title:
        " Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttit...",
      details: "A thrilling adventure novel",
      price: "39.00",
      credit: "Author 1",
    },

    {
      id: 10,
      cover: "https://i.ibb.co/Nn1G7B3/babay-tops-1-1024x1024.webp",
      name: "G. Baby Tops",
      title:
        " A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot,...",
      details: "A dystopian novel",
      price: 35.29,
      credit: "Author 10",
    },
  ];

  return (
    <div className="mensSection">
      {babys.map((baby) => (
        <Baby key={baby.id} baby={baby} />
      ))}
    </div>
  );
};

export default Babys;
