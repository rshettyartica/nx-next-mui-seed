import { render } from '@testing-library/react';

import FolderTree from './folder-tree';

describe('FolderTree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FolderTree />);
    expect(baseElement).toBeTruthy();
  });
});
