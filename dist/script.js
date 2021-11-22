class Product {
    constructor(
      name,
      description,
      flavorText,
      finishStyle,
      finishCatalog,
      added,
      creator,
      update
    ) {
      this.name = name;
      this.description = description;
      this.flavorText = flavorText;
      this.finishStyle = finishStyle;
      this.finishCatalog = finishCatalog;
      this.added = added;
      this.creator = creator;
      this.update = update;
    }
  }
  
  const weapons=[];
  
  
  weapons.push(new Product(
    "M4A4 Howl",
    "Has been custom painted with the image of a snarling wolf.",
    " The wolf fights against the thunder of Thor.",
    "Custom Paint Job.",
    "309.",
    "1st May 2014.",
    "Valve.",
    "The Hunt Begins."
  ));
  weapons.push(new Product(
    "AWP Gungnir",
    "Odin’s spear travels down this custom painted pearlscent blue and ivory AWP.",
    "A weapon for the Allfather.",
    "Gunsmith.",
    "756.",
    "19th november 2019.",
    "Valve",
    "Operation Shattered Web."
  ));
  weapons.push(new Product(
    "USP-S Kill Confirmed",
    "It has been custom painted with the image of a bullet shattering a skull.",
    "2 in the chest, 1 in the head.",
    "Custom Paint Job.",
    "504.",
    "17th September 2015.",
    "Workshop Submission.",
    "Shadow Boxing."
  ));
  weapons.push(new Product(
    "Desert Eagle Blaze",
    "It has been painted by airbrushing transperant paints over a chrome base coat.",
    "The eye never misses.",
    "Andonized Airbrushed.",
    "37.",
    "14th August 2013.",
    "Valve.",
    "The Arms Deal."
  ));
  weapons.push(new Product(
    "AK 47 Asiimov",
    "It has been custom painted with a sci-fi design.",
    "Anyone can predict the future... a visionary shapes it.",
    "Custom Paint Job.",
    "3994",
    "6th December 2018.",
    "Workshop Submission.",
    "Welcome to the Danger Zone."
  ));
  
  