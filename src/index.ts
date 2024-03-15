import "frida-il2cpp-bridge";

Il2Cpp.perform(() => {
  main();
});

function main() {
  const Asm = Il2Cpp.domain.assembly("Assembly-CSharp");

  // Classess
  const PlayerHealth = Asm.image.class("Game.PlayerComponents.PlayerHealth");
  const Progress = Asm.image.class("Game.PlayerComponents.Progress");
  const Weapon = Asm.image.class("Game.PlayerComponents.Weapon.Weapon");

  // Hooks

  Weapon.method("Update").implementation = function () {
    this.field("curAmmo").value = 100;
    this.field("timeToNextFire").value = 0;

    this.method("Update").invoke();
  };

  PlayerHealth.method("TakeDamage").implementation = function () {
    // Empty implementation (no damage taken)
  };

  Progress.method("IsBoughtWeapon").implementation = function () {
    return true;
  };
}
