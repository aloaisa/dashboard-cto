/**
 * Dashboard CTO - Libnova
 * Bridge script for compatibility with the modular system
 * 
 * This file serves as a bridge between the legacy code and the new modular system.
 * It should be kept minimal, with most functionality in the modular system.
 */

// Initialize global variables needed for compatibility
window.dataAlreadyLoaded = false;
window.allData = [];
window.filteredData = [];
window.dashboardData = null;

// Only add essentials for compatibility with the modular system
document.addEventListener('DOMContentLoaded', () => {
  console.log('dashboard.js: Bridge script loaded. Deferring to modular system.');
});