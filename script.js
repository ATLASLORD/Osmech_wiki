document.addEventListener('DOMContentLoaded', function() {
  const dataSources = [
    { 
      id: "spartak", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_tp/bot_tp.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_tp/bot_tp_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_tp/bot_tp_ammo.json'
      ]
    },
    { 
      id: "dagua", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/dagua/dagua.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/dagua/dagua_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/dagua/dagua_ammo.json'
      ]
    },
    { 
      id: "tank_decoy_little", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/tank_decoy_little/tank_decoy_little.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/tank_decoy_little/tank_decoy_little_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/tank_decoy_little/tank_decoy_little_ammo.json'
      ]
    },
    { 
      id: "cuzeta", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/cuzeta/cuzeta.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/cuzeta/cuzeta_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/cuzeta/cuzeta_ammo.json'
      ]
    },
    { 
      id: "gilF", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_sniper_big/bot_sniper_big.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_sniper_big/bot_sniper_big_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_sniper_big/bot_sniper_big_ammo.json'
      ]
    },
    { 
      id: "wallF", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_shield_wall/bot_shield_wall.json',
      ]
    },
    { 
      id: "drill", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/drill/drill.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/drill/drill_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/drill/drill_ammo.json'
      ]
    },
    { 
      id: "voltar", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/healer/healer/healer.json'
      ]
    },
    { 
      id: "freezer", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_freeze/bot_freeze.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_freeze/bot_freeze_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_freeze/bot_freeze_ammo.json'
      ]
    },
    { 
      id: "sakura", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_drone/bot_drone.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_drone/bot_drone_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_drone/bot_drone_ammo.json'
      ]
    },
  ];

  // Load all data from the provided sources
  dataSources.forEach(({ id, urls }) => {
    Promise.all(urls.map(url => fetch(url).then(response => response.json())))
      .then(dataArray => {
        const [unitData, weaponData, ammoData] = dataArray; 

        // Process and insert description
        let description = unitData.description;
        if (description && description.startsWith("!LOC:")) {
          description = description.substring(5);
        }
        const contentIdDesc = id + "-desc";
        const contentDivDesc = document.getElementById(contentIdDesc);
        if (contentDivDesc) {
          contentDivDesc.textContent = description;
        }

        // Process and insert health
        const contentIdHealth = id + "-health";
        const contentDivHealth = document.getElementById(contentIdHealth);
        if (contentDivHealth && unitData.max_health) {
          contentDivHealth.textContent = unitData.max_health;
        }

        // Process and insert cost
        const contentIdCost = id + "-cost";
        const contentDivCost = document.getElementById(contentIdCost);
        if (contentDivCost && unitData.build_metal_cost) {
          contentDivCost.textContent = unitData.build_metal_cost;
        }

        // Process recon observer items (e.g., vision, radar)
        if (unitData.recon && unitData.recon.observer) {
          unitData.recon.observer.items.forEach(item => {
            if (item.layer === "surface_and_air") {
              let contentId = '';
              if (item.channel === 'sight') {
                contentId = id + "-vision";
              } else if (item.channel === 'radar') {
                contentId = id + "-radar";
              } else if (item.channel === 'radar_jammer') {
                contentId = id + "-radar_jammer";
              }
              const contentDiv = document.getElementById(contentId);
              if (contentDiv) {
                contentDiv.textContent = item.radius;
              }
            }
          });
        }

        // Process navigation details
        const contentIdNavType = id + "-nav_type";
        const contentDivNavType = document.getElementById(contentIdNavType);
        if (contentDivNavType && unitData.navigation && unitData.navigation.type) {
          contentDivNavType.textContent = unitData.navigation.type;
        }
        const contentIdMove = id + "-move_speed";
        const contentDivMove = document.getElementById(contentIdMove);
        if (contentDivMove && unitData.navigation && unitData.navigation.move_speed) {
          contentDivMove.textContent = unitData.navigation.move_speed;
        }
        const contentIdAccel = id + "-accel";
        const contentDivAccel = document.getElementById(contentIdAccel);
        if (contentDivAccel && unitData.navigation && unitData.navigation.acceleration) {
          contentDivAccel.textContent = unitData.navigation.acceleration;
        }
        const contentIdBrake = id + "-brake";
        const contentDivBrake = document.getElementById(contentIdBrake);
        if (contentDivBrake && unitData.navigation && unitData.navigation.brake) {
          contentDivBrake.textContent = unitData.navigation.brake;
        }
        const contentIdTurn = id + "-turn";
        const contentDivTurn = document.getElementById(contentIdTurn);
        if (contentDivTurn && unitData.navigation && unitData.navigation.turn_speed) {
          contentDivTurn.textContent = unitData.navigation.turn_speed;
        }

        // Process and insert unit types
        const contentIdUNITTYPE = id + "-UNITTYPE";
        const contentDivUNITTYPE = document.getElementById(contentIdUNITTYPE);
        if (contentDivUNITTYPE && unitData.unit_types) {
          if (Array.isArray(unitData.unit_types)) {
            const unitTypesCleaned = unitData.unit_types
              .map(type => type.replace('UNITTYPE_', ''))
              .filter(type => type !== 'Custom58');
            contentDivUNITTYPE.innerHTML = unitTypesCleaned.join('<br/>');
          } else {
            const type = unitData.unit_types.replace('UNITTYPE_', '');
            contentDivUNITTYPE.textContent = type !== 'Custom58' ? type : '';
          }
        }

        // Process target layers from weapon data
        const contentIdTargetLayers = id + "-target_layers";
        const contentDivTargetLayers = document.getElementById(contentIdTargetLayers);
        if (contentDivTargetLayers && weaponData.target_layers) {
          if (Array.isArray(weaponData.target_layers)) {
            contentDivTargetLayers.innerHTML = weaponData.target_layers
              .map(layer => layer.replace('WL_', '').replace('Horizontal', '').replace('Surface', ''))
              .join(', ');
          } else {
            contentDivTargetLayers.textContent = weaponData.target_layers
              .replace('WL_', '')
              .replace('Horizontal', '')
              .replace('Surface', '');
          }
        }

        // Process and insert max range
        const contentIdMaxRange = id + "-max_range";
        const contentDivMaxRange = document.getElementById(contentIdMaxRange);
        if (contentDivMaxRange && weaponData.max_range) {
          contentDivMaxRange.textContent = weaponData.max_range;
        }

        // Process and insert ammo source
        const contentIdAmmoSource = id + "-ammo_source";
        const contentDivAmmoSource = document.getElementById(contentIdAmmoSource);
        if (contentDivAmmoSource && weaponData.ammo_source) {
          contentDivAmmoSource.textContent = weaponData.ammo_source;
        }

        // Process and insert recharge rate
        const contentIdRecharge = id + "-recharge";
        const contentDivRecharge = document.getElementById(contentIdRecharge);
        if (contentDivRecharge && weaponData.ammo_capacity && weaponData.ammo_demand) {
          const rechargeRate = weaponData.ammo_capacity / weaponData.ammo_demand;
          contentDivRecharge.textContent = rechargeRate + "s";
        }

        // Process and insert rate of fire
        const contentIdRateOfFire = id + "-rate_of_fire";
        const contentDivRateOfFire = document.getElementById(contentIdRateOfFire);
        if (contentDivRateOfFire && weaponData.rate_of_fire) {
          contentDivRateOfFire.textContent = weaponData.rate_of_fire;
        }

        // Process and insert ammo per shot
        const contentIdAmmoPerShot = id + "-ammo_per_shot";
        const contentDivAmmoPerShot = document.getElementById(contentIdAmmoPerShot);
        if (contentDivAmmoPerShot && weaponData.ammo_per_shot) {
          contentDivAmmoPerShot.textContent = weaponData.ammo_per_shot;
        }

        // Process and insert damage values
        const contentIdDamage = id + "-damage";
        const contentDivDamage = document.getElementById(contentIdDamage);
        if (contentDivDamage && ammoData.damage) {
          let damageText = ammoData.damage;
          if (ammoData.full_damage_splash_radius) {
            damageText += " (" + ammoData.full_damage_splash_radius + "r)";
          }
          contentDivDamage.textContent = damageText;
        }

        // Process and insert splash damage values
        const contentIdSplashDamage = id + "-splash_damage";
        const contentDivSplashDamage = document.getElementById(contentIdSplashDamage);
        if (contentDivSplashDamage && ammoData.splash_damage) {
          let splashDamageText = ammoData.splash_damage;
          if (ammoData.splash_radius) {
            splashDamageText += " (" + ammoData.splash_radius + "r)";
          }
          contentDivSplashDamage.textContent = splashDamageText;
        }
      })
      .catch(err => console.log(err));
  });

  // Function to unmask or display content based on the provided id.
  // This example hides all elements with the class "data-section" and shows only the matching section.
  function unmaskContent(id) {
    document.querySelectorAll('.data-section').forEach(section => {
      section.style.display = 'none';
    });
    const targetSection = document.getElementById(id + '-section');
    if (targetSection) {
      targetSection.style.display = 'block';
    }
  }

  // Listen for hash changes (when the URL changes manually or via a link)
  window.addEventListener('hashchange', function() {
    const id = window.location.hash.substring(1); // remove the '#' character
    unmaskContent(id);
  });

  // On initial load, if a hash exists in the URL, unmask that section
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    unmaskContent(id);
  }

  // Example: Button event listener to change the URL hash.
  // Ensure you have a button with the ID "spartakButton" for this to work.
  const spartakButton = document.getElementById('spartakButton');
  if (spartakButton) {
    spartakButton.addEventListener('click', function() {
      window.location.hash = 'spartak';
    });
  }
});
