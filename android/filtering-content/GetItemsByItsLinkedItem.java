// DocSection: filtering_get_items_by_linked_item
// Gets items attributed to Jane.
List<ContentItem> items = deliveryService.<ContentItem>items()
    .containsFilter("elements.author", Arrays.asList("jane_doe"))
    .get()
    .getItems();

// Gets items attributed to at least Jane, John, or both.
List<ContentItem> items = deliveryService.<ContentItem>items()
    .anyFilter("elements.author", Arrays.asList("jane_doe", "john_wick"))
    .get()
    .getItems();
// EndDocSection