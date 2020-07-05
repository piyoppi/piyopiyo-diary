export type PostParserResult = {
  path: string;
  message: string;
}

export type FilterParserResult = {
  path: string;
}

export type EditParserResult = {
  id: number;
  message: string;
}

export type PlainResult = {}

export interface ParserResult<T> {
  mode: ParsedType;
  data: T;
}

export enum ParsedType {
  PostMessage,
  Filter,
  Export,
  Delete,
  Edit,
  GroupByPath
}

export class PiyopiyoCommandParser {
  parse(command: string): ParserResult<any> {
    const commandType = this._extractCommandType(command)
    let commandValue = commandType ? command.replace(`\\${commandType}`, '') : command

    if( commandValue.substring(0, 1) === ' ' ) commandValue = commandValue.substring(1)

    switch(commandType) {
      case 'filter':
      case 'f':
        return this._buildFilterResult(commandValue)

      case 'export':
        return this._buildExportResult(commandValue)

      case 'delete':
        return this._buildDeletePostResult(commandValue)

      case 'edit':
      case 'e':
        return this._buildEditPostResult(commandValue)

      case 'groupby':
      case 'g':
        return this._buildGroupByResult(commandValue)

      default:
        return this._buildPostMessageResult(commandValue)
    }
  }

  isCommandTyping(command: string): boolean {
    return (command.substring(0, 1) === '\\') && (command.indexOf(' ') < 0)
  }

  _extractCommandType(command: string): string {
    const foundCommand = command.match(/^\\[a-zA-Z]*( |$)/)
    return foundCommand ? foundCommand[0].substring(1, foundCommand[0].length).replace(' ', '') : ''
  }

  _buildGroupByResult(command: string): ParserResult<PlainResult> {
    return {
      mode: ParsedType.GroupByPath,
      data: {}
    }
  }

  _buildExportResult(command: string): ParserResult<PlainResult> {
    return {
      mode: ParsedType.Export,
      data: {}
    }
  }

  _buildDeletePostResult(command: string): ParserResult<PlainResult> {
    return {
      mode: ParsedType.Delete,
      data: {}
    }
  }

  _buildFilterResult(command: string): ParserResult<FilterParserResult> {
    return {
      mode: ParsedType.Filter,
      data: {
        path: command
      }
    }
  }

  _buildPostMessageResult(command: string): ParserResult<PostParserResult> {
    const foundPath = command.match(/^.*: /)
    const path = foundPath ? foundPath[0].substring(0, foundPath[0].length - 2) : '/'
    const message = foundPath ? command.substring(foundPath[0].length) : command

    return {
      mode: ParsedType.PostMessage,
      data: {
        path,
        message
      }
    }
  }

  _buildEditPostResult(command: string): ParserResult<EditParserResult> {
    const splittedCommand = command.split(' ')
    const id = splittedCommand.length > 1 ? parseInt(splittedCommand[0]) : -1
    const message = splittedCommand.length > 1 ? splittedCommand[1] : splittedCommand[0]

    return {
      mode: ParsedType.Edit,
      data: {
        id,
        message
      }
    }
  }
}
