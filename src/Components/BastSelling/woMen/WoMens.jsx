import WoMen from "../woMen/WoMen";
const Womens = () => {
  const Womens = [
    {
      id: 1,
      cover: "https://i.ibb.co/Lzhbq59/lipstick-1.webp",
      name: "Tb. Dark Lipstick",
      title:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph",
      details: "A thrilling adventure novel",
      price: 39.92,
      credit: "Author 1",
    },
    {
      id: 2,
      cover: "https://i.ibb.co/34Zd3qg/skin-care-1.webp",
      name: "Ia. Glossy cosmetic skin care",
      title:
        " Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat.",
      details: "Tb. Dark Lipstick",
      price: 99.52,
      credit: "Author 2",
    },
    {
      id: 3,
      cover: "https://i.ibb.co/Pj4qsHN/fitnesstracker-1-1024x1024.webp",
      name: "Xb. Realistic Fitness Trackers",
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      details: "A historical fiction",
      price: 110.28,
      credit: "Tb. Dark Lipstick",
    },
    {
      id: 4,
      cover: "https://i.ibb.co/vwX9Ckm/longt-shirt-2-1024x1024.webp",
      name: "Ca. Long T Shirt for Summer",
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      details: "A sci-fi epic",
      price: 110.12,
      credit: "Author 4",
    },
    {
      id: 5,
      cover: "https://i.ibb.co/mhS8F3B/soap-1-1024x1024.webp",
      name: "Wb. Flower Flavor Liquid Soap",
      title:
        " Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum....        ",
      details: "A self-help guide",
      price: 19.65,
      credit: "Tb. Dark Lipstick ",
    },
    {
      id: 6,
      cover: "https://i.ibb.co/rp0zDgn/The-Hydrating-Moisturizer-600x.webp",
      name: "Ja. Hydrating Moisturizer",
      title:
        "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar",
      details: "A mystery thriller",
      price: 39.2,
      credit: "Tb. Dark Lipstick ",
    },
    {
      id: 7,
      cover: "https://i.ibb.co/qWtqV3Q/metal-earring-2-600x.webp",
      name: "Ma. Metal Earring with Topaz",
      title:
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      details: "Tb. Dark Lipstick",
      price: 110.2,
      credit: "Author 7",
    },
    {
      id: 8,
      cover: "https://i.ibb.co/wQwPBzt/silver-rign-2-600x.webp",
      name: "Ta. Silver Ring with Diamond",
      title:
        " Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat.",
      details: "Tb. Dark Lipstick",
      price: 99.02,
      credit: "Author 8",
    },
    {
      id: 9,
      cover: "https://i.ibb.co/jz1M6CX/heighheel-1.webp",
      name: "H. Women High Heel",
      title:
        " The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph",
      details: "A contemporary romance",
      price: 39.49,
      credit: "Author 9",
    },
    {
      id: 10,
      cover: "https://i.ibb.co/mz9kL62/bag-6-1024x1024.webp",
      name: "P. Women Hand Purse",
      title:
        " Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica",
      details: "A dystopian novel",
      price: 33.99,
      credit: "Author 10",
    },
  ];

  return (
    <div className="mensSection">
      {Womens.map((Women) => (
        <WoMen key={WoMen.id} Women={Women} />
      ))}
    </div>
  );
};

export default Womens;
