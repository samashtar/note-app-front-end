class Note {
  constructor(day_id, name, description, id, type_id) {
    this.day_id = day_id;
    this.id = id;
    this.type_id = type_id;
    this.name = name;
    this.description = description;
    Calendar.all.notes.push(this);
  }

  getDay() {
    return Calendar.all.days.find(day => {
      return this.day_id == day.id;
    });
  }

  getType() {
    return Calendar.all.types.find(type => {
      return this.type_id == type.id;
    });
  }

  render() {
    // card color based on type
    let card = "";
    if (this.getType().name == "Urgent") {
      card += `
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
          <div class="card-body">`;
    } else if (this.getType().name == "Work") {
      card += `
        <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
          <div class="card-body">`;
    } else if (this.getType().name == "Personal") {
      card += `
        <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
          <div class="card-body">`;
    } else if (this.getType().name == "Not Urgent") {
      card += `
        <div class="card border-info mb-3" style="max-width: 20rem;">
          <div class="card-body">`;
    } else {
      card += `
        <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
          <div class="card-body">`;
    }
    card += `<h4 class="card-title">${this.name}</h4>
                <p class="card-text" data-id="${this.id}" id="descript-${
      this.id
    }">${this.description}</p>
                `;

    if (this.getDay() && this.getDay().date.match(/-/g).length < 3) {
      card += `<p class="card-text" data-id="${this.id}" id="descript-${
        this.id
      }">Day of the Week: ${this.getDay().name}</p>
            <p class="card-text" data-id="${this.id}" id="descript-${
        this.id
      }">Date: ${this.getDay().date}</p>`;
    } else {
      card += `<p class="card-text" data-id="${this.id}" id="descript-${
        this.id
      }">No day associated with this note.</p>`;
    }

    card += `<p id="type-${this.id}" data-typeid="${this.type_id}">${
      this.getType().name
    }</p>
                <button class="btn btn-info btn-sm"id="edit-${
                  this.id
                }" data-id="${this.id}" data-desc="${
      this.description
    }" data-name="${this.name}"> Edit Note </button>
                <button class= "btn btn-dark btn-sm" id="delete-${
                  this.id
                }" data-id="${this.id}" data-desc="${
      this.description
    }" data-name="${this.name}"> Delete Note </button>

            </div>
        </div>`;

    return card;
  }
}
