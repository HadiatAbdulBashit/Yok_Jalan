/* eslint-disable no-undef */
const itActsAsFavoriteDestinationModel = (favoriteDestination) => {
  it('should return the destination that has been added', async () => {
    favoriteDestination.putDestination({ id: 1 });
    favoriteDestination.putDestination({ id: 2 });

    expect(await favoriteDestination.getDestination(1))
      .toEqual({ id: 1 });
    expect(await favoriteDestination.getDestination(2))
      .toEqual({ id: 2 });
    expect(await favoriteDestination.getDestination(3))
      .toEqual(undefined);
  });

  it('should refuse a destination from being added if it does not have the correct property', async () => {
    favoriteDestination.putDestination({ aProperty: 'property' });

    expect(await favoriteDestination.getAllDestination())
      .toEqual([]);
  });

  it('can return all of the destinations that have been added', async () => {
    favoriteDestination.putDestination({ id: 1 });
    favoriteDestination.putDestination({ id: 2 });

    expect(await favoriteDestination.getAllDestination())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite destination', async () => {
    favoriteDestination.putDestination({ id: 1 });
    favoriteDestination.putDestination({ id: 2 });
    favoriteDestination.putDestination({ id: 3 });

    await favoriteDestination.deleteDestination(1);

    expect(await favoriteDestination.getAllDestination())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a destination even though the destination has not been added', async () => {
    favoriteDestination.putDestination({ id: 1 });
    favoriteDestination.putDestination({ id: 2 });
    favoriteDestination.putDestination({ id: 3 });

    await favoriteDestination.deleteDestination(4);

    expect(await favoriteDestination.getAllDestination())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteDestinationModel };
