
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
    { 
      id: "angry_tree", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_tree/bot_tree.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_tree/bot_tree_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bot_tree/bot_tree_ammo.json'
      ]
    },
    { 
      id: "halabib", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/halabib/halabib.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/halabib/halabib_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/halabib/halabib_ammo.json'
      ]
    },
    { 
      id: "daddy_donut", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/tank_decoy/tank_decoy.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/tank_decoy/tank_decoy_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/tank_decoy/tank_decoy_ammo.json'
      ]
    },
    { 
      id: "tanabe", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/prex/prex.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/prex/prex_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/prex/prex_ammo.json'
      ]
    },
    { 
      id: "aegis", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/tank_shield/tank_shield.json'
      ]
    },
    { 
      id: "beenado", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/tank_drone/tank_drone/tank_drone.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/tank_drone/tank_drone/tank_drone_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/tank_drone/tank_drone/tank_drone_ammo.json'
      ]
    },
    { 
      id: "bumba", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bumba/bumba.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bumba/bumba_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bumba/bumba_ammo.json'
      ]
    },
    { 
      id: "gungnir", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/gigatank/gigatank.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/gigatank/gigatank_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/gigatank/gigatank_ammo.json'
      ]
    },
    { 
      id: "thorondor", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/thorondor/thorondor.json'
      ]
    },
    { 
      id: "multitransport", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/lolis/lolis.json'
      ]
    },
    { 
      id: "binho", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/binho/binho.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/binho/binho_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/binho/binho_ammo.json'
      ]
    },
    { 
      id: "kamecha", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_bot_white_hole/st_bot_white_hole.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_bot_white_hole/st_bot_white_hole_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_bot_white_hole/st_bot_white_hole_ammo.json'
      ]
    },
    { 
      id: "lawnmower", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_lawnmower/st_lawnmower.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_lawnmower/st_lawnmower_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_lawnmower/st_lawnmower_ammo.json'
      ]
    },
    { 
      id: "pap", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_pap/st_pap.json'
      ]
    },
    { 
      id: "fef", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_fef/st_fef.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_fef/st_fef_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_fef/st_fef_ammo.json'
      ]
    },
    { 
      id: "ilegal", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_ilegal/st_ilegal.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_ilegal/st_ilegal_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_ilegal/missil_ammo.json'
      ]
    },
    { 
      id: "tilha", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_colum/st_colum.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_colum/st_colum_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_colum/st_colum_ammo.json'
      ]
    },
    { 
      id: "toblerone", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_bot_anti_nuke/st_bot_anti_nuke.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_bot_anti_nuke/st_bot_anti_nuke_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_bot_anti_nuke/st_bot_anti_nuke_ammo.json'
      ]
    },
    { 
      id: "ggspider", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_ggspider_build/st_ggspider/st_ggspider.json'
      ]
    },
    { 
      id: "hindenburg", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_airship/st_airship.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_airship/st_airship_tool_weapon_missile.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/st_airship/st_airship_ammo_missile.json'
      ]
    },
    { 
      id: "canhao", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/canhao/canhao.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/canhao/canhao_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/canhao/canhao_ammo.json'
      ]
    },
    { 
      id: "kinha", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/kinha/kinha.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/kinha/kinha_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/kinha/kinha_ammo.json'
      ]
    },
    { 
      id: "maciota", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/maciota/maciota.json', 
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/maciota/maciota_tool_weapon.json',
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/maciota/maciota_ammo.json'
      ]
    },
    { 
      id: "bunker", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/bunker_build/bunker/bunker.json'
      ]
    },
    { 
      id: "spell_tower", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/spell_heal/spell_heal.json'
      ]
    },
    { 
      id: "assimilator", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/metal_destructor/metal_destructor.json'
      ]
    },
    { 
      id: "sauron", 
      urls: [
        'https://raw.githubusercontent.com/ATLASLORD/Thorosmen/main/pa/units/thorosmen/titan_radar/titan_radar.json'
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

        const contentIdArmor = id + "-armor";
        const contentDivArmor = document.getElementById(contentIdArmor);
        
        if (contentDivArmor && unitData.unit_types) {
          if (Array.isArray(unitData.unit_types)) {
            let unitTypesFiltered = unitData.unit_types
              .map(type => type.replace('UNITTYPE_', ''))
              .filter(type => ["Land", "Air", "Structure", "Orbital", "Naval", "Hover"].includes(type));
        
            // If both "Land" and "Hover" are found, take "Hover"
            if (unitTypesFiltered.includes("Land") && unitTypesFiltered.includes("Hover")) {
              unitTypesFiltered = unitTypesFiltered.filter(type => type !== "Land");
            }
            
            // If both "Air" and "Orbital" are found, take "Air"
            if (unitTypesFiltered.includes("Air") && unitTypesFiltered.includes("Orbital")) {
              unitTypesFiltered = unitTypesFiltered.filter(type => type !== "Orbital");
            }
            
            contentDivArmor.innerHTML = unitTypesFiltered.join('<br/>');
          } else {
            const type = unitData.unit_types.replace('UNITTYPE_', '');
            if (["Land", "Air", "Structure", "Orbital", "Naval", "Hover"].includes(type)) {
              contentDivArmor.textContent = type;
            }
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

        const contentIdAmmoCapacity = id + "-ammo_capacity";
        const contentDivAmmoCapacity = document.getElementById(contentIdAmmoCapacity);
        if (contentDivAmmoCapacity && weaponData.ammo_capacity) {
        contentDivAmmoCapacity.textContent = weaponData.ammo_capacity;
      }


        const contentIdAmmosPerCharge = id + "-ammos_per_charge";
        const contentDivAmmosPerCharge = document.getElementById(contentIdAmmosPerCharge);
        if (contentDivAmmosPerCharge && weaponData.ammo_capacity && weaponData.ammo_per_shot) {
        const ammosPerCharge = weaponData.ammo_capacity / weaponData.ammo_per_shot;
        contentDivAmmosPerCharge.textContent = ammosPerCharge;
       }





        const contentIdRateOfFire = id + "-rate_of_fire";
        const contentDivRateOfFire = document.getElementById(contentIdRateOfFire);
        if (contentDivRateOfFire && weaponData.rate_of_fire) {
          contentDivRateOfFire.textContent = weaponData.rate_of_fire;
        }

        const contentIdAmmoPerShot = id + "-ammo_per_shot";
        const contentDivAmmoPerShot = document.getElementById(contentIdAmmoPerShot);
        if (contentDivAmmoPerShot && weaponData.ammo_per_shot) {
          contentDivAmmoPerShot.textContent = weaponData.ammo_per_shot;
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

        const contentIdDps = id + "-dps";
        const contentDivDps = document.getElementById(contentIdDps);
        if (contentDivDps && weaponData.rate_of_fire && ammoData.damage) {
        const dps = weaponData.rate_of_fire * ammoData.damage;
        contentDivDps.textContent = dps;}


      })
      .catch(err => console.log(err));
  });
});
