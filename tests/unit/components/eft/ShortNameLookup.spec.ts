import ShortNameLookup from '@/components/eft/ShortNameLookup.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import { LookupStates } from '@/util/constants'

Vue.use(Vuetify)
const vuetify = new Vuetify({})

describe('Short Name Lookup Component', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(ShortNameLookup,
      {
        vuetify,
        mocks: {
          LookupStates
        }
      }
    )
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders the component properly', () => {
    expect(wrapper.find('#short-name-lookup').exists()).toBe(true)
    expect(wrapper.find('.v-input__slot').text()).toBe('Account ID or Account Name')
  })
})
