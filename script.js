
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
    
  ];

  dataSources.forEach(({ id, urls }) => {
    Promise.all(urls.map(url => fetch(url).then(response => response.json())))
      .then(dataArray => {
        const [unitData, weaponData, ammoData] = dataArray; 

        let description = unitData.description;
        if (description && description.startsWith("!LOC:")) {
          description = description.substring(5);
        }

        const contentIdDesc = id + "-desc";
        const contentDivDesc = document.getElementById(contentIdDesc);
        if (contentDivDesc) {
          contentDivDesc.textContent = description;
        }

        const contentIdHealth = id + "-health";
        const contentDivHealth = document.getElementById(contentIdHealth);
        if (contentDivHealth && unitData.max_health) {
          contentDivHealth.textContent = unitData.max_health;
        }

        const contentIdCost = id + "-cost";
        const contentDivCost = document.getElementById(contentIdCost);
        if (contentDivCost && unitData.build_metal_cost) {
          contentDivCost.textContent = unitData.build_metal_cost;
        }

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

        const contentIdUNITTYPE = id + "-UNITTYPE";
        const contentDivUNITTYPE = document.getElementById(contentIdUNITTYPE);
        if (contentDivUNITTYPE && unitData.unit_types) {
          if (Array.isArray(unitData.unit_types)) {
            const unitTypesCleaned = unitData.unit_types.map(type => type.replace('UNITTYPE_', '')).filter(type => type !== 'Custom58');
            contentDivUNITTYPE.innerHTML = unitTypesCleaned.join('<br/>');
          } else {
            const type = unitData.unit_types.replace('UNITTYPE_', '');
            contentDivUNITTYPE.textContent = type !== 'Custom58' ? type : '';
          }
        }

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
        

        const contentIdMaxRange = id + "-max_range";
        const contentDivMaxRange = document.getElementById(contentIdMaxRange);
        if (contentDivMaxRange && weaponData.max_range) {
          contentDivMaxRange.textContent = weaponData.max_range;
        }

        const contentIdAmmoSource = id + "-ammo_source";
        const contentDivAmmoSource = document.getElementById(contentIdAmmoSource);
        if (contentDivAmmoSource && weaponData.ammo_source) {
         contentDivAmmoSource.textContent = weaponData.ammo_source;
        }

        const contentIdRecharge = id + "-recharge";
        const contentDivRecharge = document.getElementById(contentIdRecharge);
        if (contentDivRecharge && weaponData.ammo_capacity && weaponData.ammo_demand) {
         const rechargeRate = weaponData.ammo_capacity / weaponData.ammo_demand;
        contentDivRecharge.textContent = rechargeRate + "s";
      }




        const contentIdRateOfFire = id + "-rate_of_fire";
        const contentDivRateOfFire = document.getElementById(contentIdRateOfFire);
        if (contentDivRateOfFire && weaponData.rate_of_fire) {
          contentDivRateOfFire.textContent = weaponData.rate_of_fire;
        }

        const contentIdDamage = id + "-damage";
        const contentDivDamage = document.getElementById(contentIdDamage);
        if (contentDivDamage && ammoData.damage) {
          let damageText = ammoData.damage;
          if (ammoData.full_damage_splash_radius) {
            damageText += " (" + ammoData.full_damage_splash_radius + "r)";
          }
          contentDivDamage.textContent = damageText;
        }

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
});
