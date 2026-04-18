"use strict";

const Createdieselgenerators = (event) => {
  //removals
  event.remove({ id: /^createdieselgenerators:crushing\/wood_chip_.*$/ });
  event.remove({ id: "createdieselgenerators:compression_molding/bucket" });
};
