const schema = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          custom: {
            (arg0: (value: any) => boolean): { (): any; new (): any; error: { (arg0: string): any; new (): any } };
            new (): any;
          };
        };
      }) =>
        Rule.required()
          .custom((value: string) => {
            return ['next 13', 'frontend', 'backend', 'fullstack', 'other'].includes(value);
          })
          .error('Please select a valid category.'),
      options: {
        list: [
          { title: 'Next 13', value: 'next 13' },
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Fullstack', value: 'fullstack' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
  ],
};

export default schema;
