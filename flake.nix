{
  description = "Ari's website; Hosted at adryd.com and partially on adryd.co";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils, }:
    utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages."${system}";
      in {
        formatter = pkgs.nixfmt;
        devShell = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            jekyll
            (rubyPackages.jekyll-feed)
            nodejs
            nodePackages.npm
            nodePackages.prettier
          ];
        };
      });
}
