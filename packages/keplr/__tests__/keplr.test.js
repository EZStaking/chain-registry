import assets from '../../../__fixtures__/assets.json';
import chains from '../../../__fixtures__/chains.json';
import { chainRegistryChainToKeplr } from '../src/';

it('keplr', () => {
  const chain = chains.find((chain) => chain.chain_name === 'osmosis');
  const config = chainRegistryChainToKeplr(chain, assets);
  expect(config).toMatchSnapshot();
});

it('getExplorer', () => {
  const chain = chains.find((chain) => chain.chain_name === 'osmosis');
  const config = chainRegistryChainToKeplr(chain, assets, {
    getExplorer: () => 'https://myexplorer.com',
    getRestEndpoint: (chain) => chain.apis?.rest[1]?.address
  });
  expect(config).toMatchSnapshot();
});
