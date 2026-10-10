/*
 * EN: Enhanced batch dweller selection and editing features.
 * Enhanced distribution maintainer: EzakiHaku (2026-10-10).
 * This is a modification of the MobileSam / rakion99 project lineage,
 * not a claim of authorship over upstream or third-party code.
 * Distributed under the applicable AGPL-3.0-or-later terms; see LICENSE.md.
 * 中文：增强版居民批量选择和编辑功能。
 * 本增强版本维护者：EzakiHaku（2026-10-10）。
 * 本项目基于 MobileSam / rakion99 项目代码进行改造，不主张对上游及第三方代码的原创署名。
 * 修改版遵循适用的 AGPL-3.0 或更新版本条款，详见 LICENSE.md。
 */

(function () {
    "use strict";

    angular.module("shelter").directive("batchSelect", function () {
        return {
            restrict: "A",

            link: function (scope) {

                // Store selections separately from game save data
                scope.batchSelected = {};

                // Clear all selections
                scope.clearBatchSelection = function () {
                    scope.batchSelected = {};
                };
                
                // Batch change last name
                scope.batchNewSurname = "";

                scope.applyBatchSurname = function () {

                    var newSurname =
                        (scope.batchNewSurname || "").trim();

                    if (!newSurname) {
                        alert("Please enter a last name.");
                        return;
                    }

                    var dwellers = scope.save &&
                        scope.save.dwellers &&
                        scope.save.dwellers.dwellers;

                    if (!Array.isArray(dwellers)) {
                        alert("No save data loaded.");
                        return;
                    }

                    var selectedIndexes = [];

                    angular.forEach(dwellers, function (d, index) {
                        if (scope.batchSelected[index] === true) {
                            selectedIndexes.push(index);
                        }
                    });

                    if (selectedIndexes.length === 0) {
                        alert("Please select at least one dweller.");
                        return;
                    }

                    var confirmed = confirm(
                        "Change the last name of " +
                        selectedIndexes.length +
                        " dwellers to '" + newSurname + "'?"
                    );

                    if (!confirmed) {
                        return;
                    }

                    angular.forEach(selectedIndexes, function (index) {
                        dwellers[index].lastName = newSurname;
                    });

                    alert(
                        "Successfully updated " +
                        selectedIndexes.length +
                        " dwellers. Use Save to export."
                    );
                };


                // Batch change dweller level
                scope.batchNewLevel = 50;

                scope.applyBatchLevel = function () {

                    var newLevel = Number(scope.batchNewLevel);

                    // Validate level
                    if (!Number.isInteger(newLevel) ||
                        newLevel < 1 || newLevel > 50) {
                        alert("Please enter a level between 1 and 50.");
                        return;
                    }

                    var dwellers = scope.save &&
                        scope.save.dwellers &&
                        scope.save.dwellers.dwellers;

                    if (!Array.isArray(dwellers)) {
                        alert("No save data loaded.");
                        return;
                    }

                    var targets = [];

                    angular.forEach(dwellers, function (d, index) {
                        if (scope.batchSelected[index] === true) {
                            targets.push(d);
                        }
                    });

                    if (targets.length === 0) {
                        alert("Please select at least one dweller.");
                        return;
                    }

                    // Check data before making changes
                    for (var i = 0; i < targets.length; i++) {
                        if (!targets[i].experience ||
                            !Number.isInteger(
                                targets[i].experience.currentLevel)) {
                            alert("A selected dweller has invalid level data.");
                            return;
                        }
                    }

                    var confirmed = confirm(
                        "Change the level of " +
                        targets.length +
                        " dwellers to Level " + newLevel + "?"
                    );

                    if (!confirmed) {
                        return;
                    }

                    angular.forEach(targets, function (d) {
                        d.experience.currentLevel = newLevel;
                    });

                    alert(
                        "Successfully updated " +
                        targets.length +
                        " dwellers to Level " + newLevel +
                        ". Use Save to export."
                    );
                };

                // Batch equip weapon
                scope.batchWeaponId = "";

                scope.applyBatchWeapon = function () {

                    var weaponId = scope.batchWeaponId;

                    // Validate selected weapon
                    if (!weaponId ||
                        !scope.dwellerweaponlist ||
                        !Object.prototype.hasOwnProperty.call(
                            scope.dwellerweaponlist, weaponId)) {
                        alert("Please select a valid weapon.");
                        return;
                    }

                    // Read dweller data
                    var dwellers = scope.save &&
                        scope.save.dwellers &&
                        scope.save.dwellers.dwellers;

                    if (!Array.isArray(dwellers)) {
                        alert("No save data loaded.");
                        return;
                    }

                    // Collect selected dwellers
                    var targets = [];

                    angular.forEach(dwellers, function (d, index) {
                        if (scope.batchSelected[index] === true) {
                            targets.push(d);
                        }
                    });

                    if (targets.length === 0) {
                        alert("Please select at least one dweller.");
                        return;
                    }

                    // Validate equipment structures
                    for (var i = 0; i < targets.length; i++) {
                        if (!targets[i].equipedWeapon ||
                            typeof targets[i].equipedWeapon !== "object") {
                            alert("A selected dweller has invalid weapon data.");
                            return;
                        }
                    }

                    var weaponName = scope.dwellerweaponlist[weaponId];

                    // Confirmation
                    var confirmed = confirm(
                        "Equip " + targets.length +
                        " dwellers with '" + weaponName + "'?"
                    );

                    if (!confirmed) {
                        return;
                    }

                    // Apply weapon to selected dwellers only
                    angular.forEach(targets, function (d) {
                        d.equipedWeapon.id = weaponId;
                    });

                    alert(
                        "Successfully equipped " +
                        targets.length +
                        " dwellers with " + weaponName +
                        ". Use Save to export."
                    );
                };

                // Batch equip outfit
                scope.batchOutfitId = "";

                scope.applyBatchOutfit = function () {

                    var outfitId = scope.batchOutfitId;

                    // Validate selected outfit
                    if (!outfitId ||
                        !scope.dwelleroutfitslist ||
                        !Object.prototype.hasOwnProperty.call(
                            scope.dwelleroutfitslist, outfitId)) {
                        alert("Please select a valid outfit.");
                        return;
                    }

                    // Read dweller data
                    var dwellers = scope.save &&
                        scope.save.dwellers &&
                        scope.save.dwellers.dwellers;

                    if (!Array.isArray(dwellers)) {
                        alert("No save data loaded.");
                        return;
                    }

                    // Collect selected dwellers
                    var targets = [];

                    angular.forEach(dwellers, function (d, index) {
                        if (scope.batchSelected[index] === true) {
                            targets.push(d);
                        }
                    });

                    if (targets.length === 0) {
                        alert("Please select at least one dweller.");
                        return;
                    }

                    // Validate outfit structures
                    for (var i = 0; i < targets.length; i++) {
                        if (!targets[i].equipedOutfit ||
                            typeof targets[i].equipedOutfit !== "object") {
                            alert("A selected dweller has invalid outfit data.");
                            return;
                        }
                    }

                    var outfitName = scope.dwelleroutfitslist[outfitId];

                    // Confirmation
                    var confirmed = confirm(
                        "Equip " + targets.length +
                        " dwellers with '" + outfitName + "'?"
                    );

                    if (!confirmed) {
                        return;
                    }

                    // Apply outfit to selected dwellers only
                    angular.forEach(targets, function (d) {
                        d.equipedOutfit.id = outfitId;
                    });

                    alert(
                        "Successfully equipped " +
                        targets.length +
                        " dwellers with " + outfitName +
                        ". Use Save to export."
                    );
                };

                // Select all dwellers
                scope.selectAllBatch = function () {
                    var dwellers = (scope.save &&
                        scope.save.dwellers &&
                        scope.save.dwellers.dwellers) || [];

                    scope.batchSelected = {};

                    angular.forEach(dwellers, function (dweller, index) {
                        scope.batchSelected[index] = true;
                    });
                };

                // Count selected dwellers
                scope.batchSelectedCount = function () {
                    var count = 0;

                    angular.forEach(scope.batchSelected, function (selected) {
                        if (selected) {
                            count++;
                        }
                    });

                    return count;
                };

                // Reset selections when another save is loaded
                scope.$watch("save.dwellers.dwellers",
                    function (newValue, oldValue) {
                        if (newValue !== oldValue) {
                            scope.clearBatchSelection();
                        }
                    }
                );
            }
        };
    });
})();
