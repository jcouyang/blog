with import <nixpkgs> {};
stdenv.mkDerivation rec {
  name = "purplepay-ui";
  env = buildEnv { name = name; paths = buildInputs; };
  nodePath = "export PATH=$(pwd)/node_modules/.bin:$PATH";
  shellHook = nodePath;
  configurePhase = nodePath;
  buildInputs = [
    nodejs-10_x
    (yarn.override { nodejs = nodejs-10_x; })
  ];
  buildPhase = "yarn && yarn build";
  installPhase = "tar -czf build.tar.gz build/";
  src = ./.;
}
