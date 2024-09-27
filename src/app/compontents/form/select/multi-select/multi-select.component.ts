import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'MultiSelect',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss',
})
export class MultiSelectComponent {
  @Input({ required: true }) options: string[] = []; // Input to dynamically set the options
  @Output() search: EventEmitter<string> = new EventEmitter<string>(); // Emit search term to parent

  selectedOptions: string[] = []; // Array to store selected options
  filteredOptions: string[] = []; // Array for filtered options
  dropdownOpen: boolean = false; // Toggle dropdown visibility
  searchTerm: string = ''; // Search input value

  ngOnInit() {
    // Initially display all options in the dropdown
    this.filteredOptions = [...this.options];
  }

  // Toggle the dropdown visibility
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.searchTerm = ''; // Reset search input when toggling
    this.filterOptions();
  }

  // Filter options based on search term
  filterOptions() {
    const lowerSearch = this.searchTerm.toLowerCase();
    this.filteredOptions = this.options.filter((option) =>
      option.toLowerCase().includes(lowerSearch),
    );
  }

  // Emit search term whenever the input value changes
  onSearchChange() {
    console.log('Search Term', this.searchTerm);
    this.search.emit(this.searchTerm);
    this.filterOptions();
  }

  // Select an option (multiple selections allowed)
  selectOption(option: string) {
    if (!this.selectedOptions.includes(option)) {
      this.selectedOptions.push(option);
    }
    this.filterOptions();
  }

  // Remove an option from selected options
  removeOption(option: string, event: Event) {
    event.stopPropagation();
    this.selectedOptions = this.selectedOptions.filter(
      (selected) => selected !== option,
    );
    this.filterOptions();
  }
}
