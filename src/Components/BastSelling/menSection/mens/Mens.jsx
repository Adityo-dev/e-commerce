import Men from "../men/Men";
import "./mens.css";
const Mens = () => {
  const mens = [
    {
      id: 1,
      cover: "https://i.ibb.co/B4sj6x0/shirt-1-large.webp",
      name: "W. Men Formal T-shirt",
      title:
        " Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum....",
      details: "A thrilling adventure novel",
      price: 10.99,
      credit: "Author 1",
    },
    {
      id: 2,
      cover: "https://i.ibb.co/cC9jbjg/blueshoe-2-600x.webp",
      name: "B. Pair of Blue Shoes",
      title:
        " Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum....",
      details: "A romantic comedy",
      price: 12.5,
      credit: "Author 2",
    },
    {
      id: 3,
      cover: "https://i.ibb.co/x7Hdd86/watch.webp",
      name: "F. Ultimate Smart Watch",
      title:
        " Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum....",
      details: "A historical fiction",
      price: 15.99,
      credit: "Author 3",
    },
    {
      id: 4,
      cover: "https://i.ibb.co/ySs7wJN/jacket-8-1024x1024.webp",
      name: "S. Mokmol Jacket",
      title:
        " Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum....",
      details: "A sci-fi epic",
      price: 14.25,
      credit: "Author 4",
    },
    {
      id: 5,
      cover: "https://i.ibb.co/kDcCvBh/sunglass-1.webp",
      name: "A. Stylist Sunglass",
      title:
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      details: "A self-help guide",
      price: 9.99,
      credit: "Author 5",
    },
    {
      id: 6,
      cover: "https://i.ibb.co/DMCdvX6/jacket-1.webp",
      name: "M. Denim Clothing Jacket",
      title:
        " Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum....",
      details: "A mystery thriller",
      price: 11.75,
      credit: "Author 6",
    },
    {
      id: 7,
      cover: "https://i.ibb.co/NVYKyKb/ment-shirt-1.webp",
      name: "E. Casual Comforts T-shirt",
      title:
        " Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum....",
      details: "A fantasy adventure",
      price: 13.49,
      credit: "Author 7",
    },
    {
      id: 8,
      cover: "https://i.ibb.co/GWGcnkC/hat-1.webp",
      name: "D. Fashionable Hat",
      title:
        " Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnico...",
      details: "A psychological drama",
      price: 16.99,
      credit: "Author 8",
    },
    {
      id: 9,
      cover: "https://i.ibb.co/jw3R6nQ/men-large-tshirt-4-1024x1024.webp",
      name: "Ra. Men Large Polo T Shirt",
      title:
        "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica",
      details: "A contemporary romance",
      price: 33.49,
      credit: "Author 9",
    },
    {
      id: 10,
      cover: "https://i.ibb.co/8cyFv7g/men-coat-1-1024x1024-1.webp",
      name: "Aa. Men Coat",
      title:
        " The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar",
      details: "A dystopian novel",
      price: 39.99,
      credit: "Author 10",
    },
  ];

  return (
    <div className="mensSection">
      {mens.map((men) => (
        <Men key={men.id} men={men} />
      ))}
    </div>
  );
};

export default Mens;
